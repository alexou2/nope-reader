#!/usr/bin/bash
java src/Main.java $@
#echo -e "\n\n\n"
cat firstChap.txt
chap=`cat firstChap.txt`
firefox $chap
#open $chap
echo -e "\n\n\n"
echo $chap
echo -e "\n\n\n"
echo "press any key to exit (or press any key to keep using the terminal)"
read quit
if [ -z "$quit" ] 
then
echo "quit" 
exit
fi
