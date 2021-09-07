<template>
  <el-card shadow="never">
    <pre>
    server {

        listen       80;
        server_name  chocolate;
        client_max_body_size 1000m;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   /usr/local/nginx/views/dist;
            index  index.html index.htm;
            try_files $uri /index.html;
        }

        location  ^~ /api/ {
            proxy_pass http://127.0.0.1:8080/;
        }

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

    }
  </pre>
  </el-card>
</template>

<script>
export default {
  name: "Deploy"
}
</script>

<style scoped>

</style>