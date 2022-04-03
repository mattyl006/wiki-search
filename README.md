# Wiki search

This project goal is to create custom search engine with some data which are present on the nice frontend interface.

This README document show all my steps to realize mention goal.

## Initial steps

1. Create network for elasticsearch  
   `docker network create elastic`
2. Pull elasticsearch and kibana docker images  
   `docker pull docker.elastic.co/elasticsearch/elasticsearch:8.1.2`  
   `docker pull docker.elastic.co/kibana/kibana:8.1.2`
3. Now we should see docker image for elasticsearch and kibana after running this commnad:  
   `docker images`
4. Increase virtual memory areas to successful run elasticseach engine
   `sudo sysctl -w vm.max_map_count=262144`
5. Init elastichsearch engine  
   `docker run --name es01 --net elastic -p 9200:9200 -p 9300:9300 -it docker.elastic.co/elasticsearch/elasticsearch:8.1.2`
6. Now we should be able to see on the _https:localhost:9200_ initial elasticsearch json (https is importat!)
7. Copy http certificate from container to our local machine  
   `docker cp es01:/usr/share/elasticsearch/config/certs/http_ca.crt .`
8. Get init json by curl  
   `curl --cacert http_ca.crt -u elastic https://localhost:9200`
9. Init kibana  
   `docker run --name kib-01 --net elastic -p 5601:5601 docker.elastic.co/kibana/kibana:8.1.2`
10. Input token and password generated by elasticsearch init in kibana interface to config
11. We can rerun elasticsearch or kibana by:  
    `docker start es01` `docker start kib-01`  
     and open _localhost:5601_
