---
title: "Serverless"
description: "What is next for serverless?"
date: "12/31/2022"
draft: false
---

# What is next for serverless?

Serverless computing continues to evolve as serverless providers come up with solutions to overcome some of its drawbacks. One of these drawbacks is cold starts.

Typically when a particular serverless function has not been called in a while, the provider shuts down the function to save energy and avoid over-provisioning. The next time a user runs an application that calls that function, the serverless provider will have to spin it up fresh and start hosting that function again. This startup time adds significant latency, which is known as a ‘cold start’.

Once the function is up and running it will be served much more rapidly on subsequent requests (warm starts), but if the function is not requested again for a while, the function will once again go dormant. This means the next user to request that function will experience a cold start. Up until fairly recently, cold starts were considered a necessary trade-off of using serverless functions.

Cloudflare Workers has addressed this problem by spinning up serverless functions in advance, during the TLS handshake. Since Workers functions spin up at the edge in a very short amount of time, even shorter than the time required to complete the handshake, the result is an FaaS platform with zero cold starts. To get started with Cloudflare Workers, see our Developer documentation.

As more and more of the drawbacks of using serverless get addressed and the popularity of edge computing grows, we can expect to see serverless architecture becoming more widespread.

```js
  function hello() {
    console.log("hello world");
  }
```