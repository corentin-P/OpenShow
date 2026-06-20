# OpenShow

## Getting started

This repository contains basic graphical components and architecture to create a showcase website without programming.

You can find an exemple website [here](https://portfolio-demo.corentin-piquerez.fr/), which contains all the graphical components available.

You can also pull the docker image `clashcoco/openshow:1.0.2` which is the official image of the example website.
```sh
docker pull clashcoco/openshow:1.0.2
```

![homepage](./doc/homepage.png)

## Create your own website

First, I really recommend you to mirror this repository, so you have your own repository with a copy of this one in it. 

Then, you'll be able to modify the website. 

To Mirror this repository, you can refer to this [wiki](https://github.com/corentin-P/OpenShow/wiki/Mirroring-this-repository)

### Edit the content of the website

To set the content of the website, you'll need to edit JSON files. 

You can find the details of the configuration files [here](/src/lang/README.md).

You can also find the list of the available components & their configuration [here](/src/components/README.md).

## Run in development 

You can run this project with docker (you first need to install docker) : 

```sh
docker compose up
```

And then access to the local website (dev version) at 
```sh
http://localhost:8000
```
