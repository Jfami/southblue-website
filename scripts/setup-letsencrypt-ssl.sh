#!/bin/bash

# SouthBlue Website - Let's Encrypt SSL Certificate Setup
# This script sets up SSL certificate for southblueweb.com using Let's Encrypt

set -e

DOMAIN="southblueweb.com"
EMAIL="info@southblueweb.com"

echo "🔐 Setting up Let's Encrypt SSL certificate for SouthBlue Website..."

# Install certbot if not already installed
if ! command -v certbot &> /dev/null; then
    echo "📦 Installing certbot..."
    sudo apt update
    sudo apt install -y certbot python3-certbot-nginx
fi

# Stop nginx temporarily for certificate generation
echo "⏸️ Stopping nginx temporarily..."
sudo systemctl stop nginx

# Generate SSL certificate
echo "🔐 Generating SSL certificate for $DOMAIN..."
sudo certbot certonly --standalone \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --domains $DOMAIN,www.$DOMAIN

# Update nginx configuration to use Let's Encrypt certificates
echo "🔧 Updating nginx configuration with Let's Encrypt certificates..."
sudo tee /opt/bitnami/nginx/conf/server_blocks/southblueweb.com.conf > /dev/null << 'EOF'
# SouthBlue Website - southblueweb.com with Let's Encrypt SSL
server {
    listen 80;
    listen [::]:80;
    server_name southblueweb.com www.southblueweb.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name southblueweb.com www.southblueweb.com;
    
    # Let's Encrypt SSL Configuration
    ssl_certificate /etc/letsencrypt/live/southblueweb.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/southblueweb.com/privkey.pem;
    
    # SSL Security Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # Document root
    root /opt/websites/southblueweb.com/current;
    index index.html index.htm;
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private must-revalidate auth;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
    
    # Main location block
    location / {
        try_files $uri $uri/ /index.html;
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
    
    # Let's Encrypt challenge
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    # Security - deny access to sensitive files
    location ~ /\. {
        deny all;
    }
    
    location ~ ^/(\.user.ini|\.htaccess|\.htpasswd|\.sh|\.bak|\.swp|\.swo)$ {
        deny all;
    }
    
    # Logs
    access_log /opt/bitnami/nginx/logs/southblueweb.com_access.log;
    error_log /opt/bitnami/nginx/logs/southblueweb.com_error.log;
}
EOF

# Test nginx configuration
echo "🔍 Testing nginx configuration..."
sudo nginx -t

# Start nginx
echo "🚀 Starting nginx..."
sudo systemctl start nginx

# Set up automatic renewal
echo "🔄 Setting up automatic SSL renewal..."
sudo crontab -l 2>/dev/null | grep -v 'certbot renew' | sudo crontab -
(sudo crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet --reload-hook 'systemctl reload nginx'") | sudo crontab -

echo "✅ Let's Encrypt SSL certificate setup completed!"
echo "🔐 SSL Certificate: /etc/letsencrypt/live/southblueweb.com/fullchain.pem"
echo "🔑 SSL Private Key: /etc/letsencrypt/live/southblueweb.com/privkey.pem"
echo "🔄 Automatic renewal configured"
echo "🌐 Website: https://southblueweb.com"
