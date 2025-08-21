#!/bin/bash

# SouthBlue Website - Nginx Configuration and SSL Setup Script
# This script sets up nginx virtual host and SSL certificate for southblueweb.com

set -e

DOMAIN="southblueweb.com"
PROJECT_DIR="/opt/websites/southblueweb.com/current"
NGINX_SITES_AVAILABLE="/opt/bitnami/nginx/conf/server_blocks"
NGINX_SITES_ENABLED="/opt/bitnami/nginx/conf/server_blocks"

echo "🚀 Setting up nginx configuration for SouthBlue Website..."

# Create nginx server block configuration
sudo tee "$NGINX_SITES_AVAILABLE/southblueweb.com.conf" > /dev/null << 'EOF'
# SouthBlue Website - southblueweb.com
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
    
    # SSL Configuration
    ssl_certificate /opt/bitnami/nginx/conf/bitnami/certs/server.crt;
    ssl_certificate_key /opt/bitnami/nginx/conf/bitnami/certs/server.key;
    
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

echo "✅ Nginx configuration created for southblueweb.com"

# Create project directories
echo "📁 Creating project directories..."
sudo mkdir -p /opt/websites/southblueweb.com/current
sudo mkdir -p /opt/websites/southblueweb.com/backups
sudo chown -R bitnami:bitnami /opt/websites/southblueweb.com

# Test nginx configuration
echo "🔍 Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "🔄 Reloading nginx..."
sudo systemctl reload nginx

echo "✅ SouthBlue Website nginx configuration completed!"
echo "🌐 Domain: https://southblueweb.com"
echo "📁 Document root: /opt/websites/southblueweb.com/current"
echo ""
echo "Next steps:"
echo "1. Point southblueweb.com DNS to this server's IP"
echo "2. Set up SSL certificate (Let's Encrypt or custom)"
echo "3. Deploy the website files"
