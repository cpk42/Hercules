#!/bin/bash

apt-get install openssh-server
sed -i 's/Port 22/Port 55455/g' /etc/ssh/sshd_config
service sshd restart