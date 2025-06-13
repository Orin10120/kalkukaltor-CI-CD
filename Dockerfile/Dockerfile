
# Gunakan base image ringan
FROM nginx:alpine

# Tambahkan user non-root
RUN addgroup -S nonroot && adduser -S nonroot -G nonroot

# Salin file HTML/CSS/JS ke folder Nginx
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Ganti permission agar bisa dibaca oleh nonroot
RUN chown -R nonroot:nonroot /usr/share/nginx/html

# Gunakan user non-root
USER nonroot

# Expose port
EXPOSE 80

# Jalankan nginx
CMD ["nginx", "-g", "daemon off;"]
