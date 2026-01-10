
# Installation frontend

Install the project frontend with npm

```bash
  cd project
  npm install
  npm run dev
```

Frontend localhost should be 3000
    
# Installation backend

```bash
  cd project
  npm install
  npm run start-dev
```

backend localhost should be 5000

# Project Structure
After user authentication pasting the URL should add this to the dashboard where a short URL is generated. No duplicate url can be input to the dashboard alongside fake url also be prevented. The project databased and auth used supabase. For icons react-icons has been used. 

# API Documentation
For get request
http://localhost:5000/api/shorten?email=email

For post request
http://localhost:5000/api/shorten

For the delete request
http://localhost:5000/api/shorten/:id

For shortcode get request with click count logic
http://localhost:5000/KzN9E8

# Design Decisions
Design decition mostly made by searching on google and cheaking in youtube videos for similar projects. Also other service providers use a similar design for their projects.

# Known Limitations
Creating shortcode was challenging however I overcome that challenge by checking Supabase documantation and createing the logic for click count.

# Test auth
email: user@mail.com
password: 123456
