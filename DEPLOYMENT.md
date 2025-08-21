# SouthBlue Website - Deployment Guide

## Overview
This document outlines the deployment process for the SouthBlue Electronics website to AWS Lightsail using GitHub Actions.

## Prerequisites

### GitHub Secrets Required
Set up the following secrets in your GitHub repository (`Settings > Secrets and variables > Actions`):

```
AWS_ACCESS_KEY_ID          # AWS access key for Lightsail
AWS_SECRET_ACCESS_KEY      # AWS secret key for Lightsail
LIGHTSAIL_SSH_KEY          # Private SSH key for Lightsail instance
CLOUDFLARE_API_TOKEN       # Cloudflare API token (optional)
CLOUDFLARE_ZONE_ID_SOUTHBLUE # Cloudflare zone ID for southblueweb.com (optional)
```

### Domain Configuration
- Domain: `southblueweb.com`
- DNS should point to your Lightsail instance IP
- SSL certificate will be configured automatically

## Deployment Architecture

### Multi-Site Structure
The deployment uses a multi-site nginx structure on the shared Lightsail instance:

```
/opt/websites/
├── southblueweb.com/
│   ├── current/          # Active deployment
│   └── backups/          # Automatic backups
├── fileszipper.com/      # Other project (existing)
└── [other-sites]/        # Other projects
```

### Nginx Configuration
- Virtual host: `/opt/bitnami/nginx/conf/server_blocks/southblueweb.com.conf`
- SSL certificates: Let's Encrypt or custom
- Automatic HTTPS redirect
- Security headers included

## Deployment Process

### Automatic Deployment
1. Push to `main` or `master` branch
2. GitHub Actions workflow triggers automatically
3. Builds the React application
4. Deploys to Lightsail instance
5. Reloads nginx configuration
6. Verifies deployment health
7. Purges Cloudflare cache (if configured)

### Manual Deployment
Use GitHub's workflow dispatch feature:
1. Go to Actions tab in GitHub
2. Select "Deploy SouthBlue Website"
3. Click "Run workflow"
4. Select environment (production)

## Server Setup (One-time)

### 1. Nginx Configuration
Run on the Lightsail instance:
```bash
# Upload and run the nginx setup script
scp scripts/setup-nginx-ssl.sh bitnami@YOUR_INSTANCE_IP:/tmp/
ssh bitnami@YOUR_INSTANCE_IP
chmod +x /tmp/setup-nginx-ssl.sh
sudo /tmp/setup-nginx-ssl.sh
```

### 2. SSL Certificate Setup
For Let's Encrypt SSL:
```bash
# Upload and run the SSL setup script
scp scripts/setup-letsencrypt-ssl.sh bitnami@YOUR_INSTANCE_IP:/tmp/
ssh bitnami@YOUR_INSTANCE_IP
chmod +x /tmp/setup-letsencrypt-ssl.sh
sudo /tmp/setup-letsencrypt-ssl.sh
```

## Monitoring & Verification

### Health Check
- URL: `https://southblueweb.com/health`
- Expected response: `healthy`

### Deployment Verification
The workflow automatically verifies:
- Health endpoint accessibility
- Main website accessibility
- SSL certificate validity

### Logs
- Nginx access logs: `/opt/bitnami/nginx/logs/southblueweb.com_access.log`
- Nginx error logs: `/opt/bitnami/nginx/logs/southblueweb.com_error.log`
- GitHub Actions logs: Available in repository Actions tab

## Rollback Process

### Automatic Backup
Each deployment creates a timestamped backup in:
```
/opt/websites/southblueweb.com/backups/southblue-backup-YYYYMMDD-HHMMSS/
```

### Manual Rollback
```bash
# SSH to the instance
ssh bitnami@YOUR_INSTANCE_IP

# List available backups
ls -la /opt/websites/southblueweb.com/backups/

# Restore from backup
sudo cp -r /opt/websites/southblueweb.com/backups/southblue-backup-YYYYMMDD-HHMMSS/* /opt/websites/southblueweb.com/current/
sudo chown -R bitnami:bitnami /opt/websites/southblueweb.com/current/
sudo systemctl reload nginx
```

## Security Features

### SSL/TLS
- TLS 1.2 and 1.3 support
- Strong cipher suites
- HSTS headers
- Automatic HTTP to HTTPS redirect

### Security Headers
- X-Frame-Options: SAMEORIGIN
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Content-Security-Policy
- Referrer-Policy

### File Security
- Denial of access to sensitive files (.htaccess, .env, etc.)
- Hidden files protection

## Performance Optimization

### Caching
- Static assets cached for 1 year
- Gzip compression enabled
- Browser caching headers

### CDN Integration
- Cloudflare cache purging after deployment
- Automatic cache invalidation

## Troubleshooting

### Common Issues

1. **Deployment fails at health check**
   - Check nginx configuration: `sudo nginx -t`
   - Verify file permissions: `ls -la /opt/websites/southblueweb.com/current/`
   - Check nginx logs for errors

2. **SSL certificate issues**
   - Verify certificate files exist
   - Check certificate expiration: `sudo certbot certificates`
   - Renew if needed: `sudo certbot renew`

3. **DNS not resolving**
   - Verify DNS records point to correct IP
   - Check Cloudflare proxy settings if using Cloudflare

### Support Commands
```bash
# Check nginx status
sudo systemctl status nginx

# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Check SSL certificate
sudo certbot certificates

# View deployment logs
tail -f /opt/bitnami/nginx/logs/southblueweb.com_access.log
```

## Contact
For deployment issues, contact: info@southblueweb.com
