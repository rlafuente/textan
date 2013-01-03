
# Textan
# Simple text animation thingy

INPUTWORD=$1

rm _output
clear
GREP=" $INPUTWORD .*$"
GREP2="^.* $INPUTWORD "
cat livro.txt | grep -o -e "${GREP2}" | rl | head -n 1 > _livro
cat publico.txt | grep -o -e "${GREP}" | rl | head -n 1 | sed -rn 's/^ *([a-z_A-Z]* )(.*)/\2/gp' > _publico
cat _livro _publico | tr -d "\n" | figlet -c -f mini
 