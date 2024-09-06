# Use Alpine Linux as the base image
FROM alpine:latest

# Install SQLite
RUN apk add --no-cache sqlite

# Copy the initialization SQL script into the container (if needed)
COPY init.sql /init.sql

# Command to keep the container running indefinitely
CMD ["sh", "-c", "tail -f /dev/null"]

