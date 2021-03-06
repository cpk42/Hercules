#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <stdio.h>
#include <string.h>

int main()
{
 
  char str[100]; //str to be read to
  int	listen_fd;// file desciptors to be used
  int	comm_fd;
 
  struct sockaddr_in servaddr; 
// struct to Hold Ip and port numbers
 
  listen_fd = socket(AF_INET, SOCK_STREAM, 0); 
// Each server needs to “listen” for connections. The above function creates a socket with AF_INET ( IP Addressing ) and of type SOCK_STREAM. Data from all devices wishing to connect on this socket will be redirected to listen_fd.
 
  bzero( &servaddr, sizeof(servaddr));
//Clear servaddr ( Mandatory ).
 
  servaddr.sin_family = AF_INET;//Set Addressing scheme to – AF_INET ( IP )

  servaddr.sin_addr.s_addr = htons(INADDR_ANY);
//  Allow any IP to connect – htons(INADDR_ANY)
  servaddr.sin_port = htons(1024);
//    Listen on port 22000 – htons(22000)

  bind(listen_fd, (struct sockaddr *) &servaddr, sizeof(servaddr));
//Prepare to listen for connections from address/port specified in sockaddr ( Any IP on port 22000 ).
 
  listen(listen_fd, 10);
//Start Listening for connections , keep at the most 10 connection requests waiting.If there are more than 10 computers wanting to connect at a time, the 11th one fails to.
 
  comm_fd = accept(listen_fd, (struct sockaddr*) NULL, NULL);
//Accept a connection from any device who is willing to connect, If there is no one who wants to connect , wait. A file descriptor is returned. This can finally be used to communicate , whatever is sent by the device accepted can be read from comm_fd, whatever is written to comm_fd is sent to the other device.
 
  while (1)
    {
 
      bzero(str, 100);
 
      read(comm_fd, str, 100);
 
	  printf("Echoing back %s\n", str);
//      printf("Pong Pong");
 
      write(comm_fd, str, strlen(str)+1);
      //The Server then does the above forever:

      //Clear str
      //read at most 100 bytes into str
      //display what it reads
      //send back str , (length of string + 1) so that is sent as well
    }
}
