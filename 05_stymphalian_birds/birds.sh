if [[ $1 = "help" ]] || [[ $1 = "Help" ]]; then
	printf "This shell script will automate the creation of your project folders!\n\nUsage: ./birds.sh language\n"
else
	if [[ "$1" != *[a-z]* ]] && [[ "$1" != *[A-Z]* ]]; then
		printf "No language provided...\n"
	else
		toggle=1
		while [ $toggle = 1 ]
		do
			read -p "Enter the project directory: " dir
			printf "\n"
			if [ -d "$dir" ]; then
				printf "Directory exists!\n\n"
			else
				printf "Creating new directory\n\n"
				mkdir $dir
				toggle=0
			fi
		done
		if [ ${#1} == 1 ] && [ "$1" = "c" ] || [ "$1" = "C" ]; then
			printf "The language is C!\n"
			cd $dir
			printf "Creating Makefile!\n"
			touch Makefile
			printf "Creating src and include folders!\n"
			mkdir src include
			printf "Creating .gitignore\n\n"
			touch .gitignore
			read -n1 -p "Would you like to clone your libft? [y/n] " ret
			echo ""
			if 	[ "$ret" = "y" ] || [ "$ret" = "Y" ]; then
				tog=1
				while [ $tog = 1 ]
				do
					read -p "Please provide a valid git repository for libft: " lib
					echo ""
					git clone $lib libft
					if [ -d "libft" ]; then
						tog=0
					fi
				done
			fi
		else
			printf "The language you provided is %s!\n" "$1"
		cd $dir
		printf "Creating .gitignore\n"
		touch .gitignore
		fi
	fi
fi