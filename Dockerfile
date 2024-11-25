# Use an official Node.js image as the base image
FROM node:18 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app for production
RUN npm run build

# Use an official Nginx image to serve the built React app
FROM nginx:stable-alpine

# Copy the built files to Nginx's default static directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port on which the app will run
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
