#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main()
{
	pid_t pid;
	char str[100];
	int	listen_fd;
	int	comm_fd;
	
	struct sockaddr_in servaddr; 
	
	pid = fork();
	if (pid < 0)
	{
		printf("error\n");
		exit(1);
	}
	listen_fd = socket(AF_INET, SOCK_STREAM, 0); 
	
	bzero( &servaddr, sizeof(servaddr));
	
	servaddr.sin_family = AF_INET;
	
	servaddr.sin_addr.s_addr = htons(INADDR_ANY);

	servaddr.sin_port = htons(1024);
	
	bind(listen_fd, (struct sockaddr *) &servaddr, sizeof(servaddr));
	
	listen(listen_fd, 10);
	
	comm_fd = accept(listen_fd, (struct sockaddr*) NULL, NULL);

	while (wait(&pid))
    {
		read(comm_fd, str, 100);
		printf("pong pong\n\n");
		write(comm_fd, str, strlen(str)+1);
    }
}
