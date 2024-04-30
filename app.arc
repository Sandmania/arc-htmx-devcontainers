@app
arc-htmx-devcontainers

@http
get /
get /layout-test

post /api/cats
get /api/cats
get /api/cats/:catID

@aws
# profile default
region us-west-2
architecture arm64

@tables
cats
  catID *String
  name String