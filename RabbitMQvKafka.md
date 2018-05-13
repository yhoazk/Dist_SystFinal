# RabbitMQ vs Kafka

Kafka is developed in scala and started out at linkedin.
Kafka is useful in a event-driven architecture.

* RabbitMQ is often used to allow web servers to respond
* RabbitMQ is designed as a general purpose message broker.
* It uses a smart broker / dumer consumer model.
* Communication in RabbitMQ can be either synchronous or asynchronous as needed.
* Apache Kafka is designed for high volume publish-subscribe message streams.
* Kafka provides a durable message store, similar to a log, run in a server 
cluster that stores streams of records in categories called topics.
* Nearly the opposite of RabbitMQ Kafka employs a dumb broker and smart consumer.
* Kafka does not track which messages were read by each consumer. Instead Kafka
retains all messges for a set amount of time, and consumers are responsible to
  track the location in each log.

* A 3-node Kafka cluster is functional even after 2 failures. However to do so
you need 5 additional Zookeeper nodes as is a quorum based system and can only 
tolerate `N/2+1` failures. These nodes should not be co-located with the kafka
nodes

* The main advantaje of Kafka over RabbitMQ is the performance. Kafka gets
100k/sec messages.
* RabbitMQ is around 20k/sec messages. The queue is backed by a single Erlang
lightweight thread taht gets cooperatively scheduled on a pool of native 
threads. This is the bottleneck for RabbitMQ.
* 

General Comparison:
|                  | Kafka  | RabbitMQ |
| :--------------  | :----- | :------- |
| Programming Lang | Scala | Erlang |
| Officialy supported clients | Java | Java/C#/Erlang |
| Main Storage space | Disk | RAM |
| Order storage and delivery | At partition level | NA |
| Message deletion | After reaching size or time limit | After confirmed consumption |
| queue data compression | supported | not supported |
