
# Textan
# Simple text animation thingy

INPUTWORD=$1

clear
GREP=' ${INPUTWORD} .*$'
cat $GREP
#cat publico.txt | grep -o -e $GREP | rl | head -n 1 | figlet -f mini

