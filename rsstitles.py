#!/bin/python

# rsstitles.py
# Fetch news titles from rss feeds

import sys,os,random
import commands

sourcefeedsdir = "./rss/" # feed URL listings directory

def getsourceurl(source):
	# open source text file	
	filename = sourcefeedsdir + source + ".txt"
	file = open(filename)
	return file.readlines()

def fetchrss(source):
	urllist = getsourceurl(source)
	results = []
	filename = "rss_" + source + ".txt"
	file = open(filename, 'w')
	cmd1 = "curl -s --connect-timeout 15"
	cmd2 = r"""| sed -e 's/<\/title>/\n/g' | grep -o '<title>.*' | sed -e 's/<title>//' | head -n 22 | tail -n 20"""

	for x in range(len(urllist)):
		_cmd =  "%s %s %s" % (cmd1, urllist[x] , cmd2)
		_cmd = _cmd.split()
		cmd = ' '.join(_cmd)
		output = commands.getoutput(cmd)
		file.writelines(output)
		
	file.close()
		
		#for i in range(len(list)):
    #line = list[i]
		
source = sys.argv[1] # check this when changing to standalone
titles=20	
fetchrss(source)
