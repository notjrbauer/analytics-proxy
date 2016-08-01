# Analytics Proxy Demo
## Installation

This relies on three other sub-dependencies:
- [Ruby-Analytics](https://github.com/notjrbauer/ruby-analytics)  
- [Python-Analytics](https://github.com/notjrbauer/python-analytics)  
- [Nodejs-Analytics](https://github.com/notjrbauer/nodejs-analytics)  

Build the proxy with docker, and then use compose to connect everything together.

- `docker build -t analyticslibrary:lastest .`
- `docker-compose up --force-recreate`

You can find the bare frontend component without a connective backend [right here](https://notjrbauer.github.io/analytics-react/)


