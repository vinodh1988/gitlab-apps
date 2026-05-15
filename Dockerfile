FROM httpd:2.4-alpine

# Copy static website files into Apache web root
COPY . /usr/local/apache2/htdocs/

EXPOSE 80
