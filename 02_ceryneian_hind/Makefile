#******************************************************************************#
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: ckrommen <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2018/03/09 14:49:47 by ckrommen          #+#    #+#              #
#    Updated: 2018/03/09 14:56:23 by ckrommen         ###   ########.fr        #
#                                                                              #
#******************************************************************************#

PACKAGES = fs superagent http clear prompt chalk dotenv

ENV = .env

NAME = hind

NODE = node_modules

all: $(NAME)

$(NAME):
	@echo "\033[32mInstalling npm packages\033[0m"
	@npm install $(PACKAGES)
	@echo "\033[32mCreating .env file\033[0m"
	@echo "FT_UID=" >> $(ENV)
	@echo "FT_SECRET=" >> $(ENV)

clean:
	@echo "\033[32mCleaning up\033[0m"
	@rm -rf $(ENV)

fclean: clean
	@echo "\033[32mFull clean\033[0m"
	@rm -rf $(NODE)

re: fclean all
