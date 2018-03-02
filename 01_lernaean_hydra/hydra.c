#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <sys/stat.h>

int main()
{
	pid_t pid;
	pid_t sid;
	char str[100];
	int	listen_fd;
	int	comm_fd;
	
	struct sockaddr_in servaddr; 
	
	listen_fd = socket(AF_INET, SOCK_STREAM, 0); 

	bzero(&servaddr, sizeof(servaddr));

	servaddr.sin_family = AF_INET;
	servaddr.sin_addr.s_addr = htons(INADDR_ANY);
	servaddr.sin_port = htons(1024);

	bind(listen_fd, (struct sockaddr *)&servaddr, sizeof(servaddr));

	listen(listen_fd, 10);

	comm_fd = accept(listen_fd, (struct sockaddr*) NULL, NULL);

	pid = fork();
	if (pid < 0)
	{
		printf("error\n");
		exit(1);
	}
	if (pid > 0)
		exit(0);
	umask(0);
	while (wait(&pid))
	{
		bzero(str, 100);
		read(comm_fd, str, 100);
		if (!strncmp("ping", str, 4))
			write(comm_fd, str, sizeof("pong pong\n"));
	}
	return (0);
}
