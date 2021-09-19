import os
import sys
import re

directory = sys.argv[1]
re_xc = re.compile('^XC([0-9]+) - ([A-Za-z- ]+) - ([A-Za-z ]+)\.mp3')

with open("xclist.json", "wb") as outfile:
    outfile.write('[\n'.encode())
    for entry in os.scandir(directory):
        print("Converting", entry.path)

        if (entry.path.endswith(".mp3")) and entry.is_file():
            m = re_xc.search(entry.name)
            if m is None:
                print("  Failed")
            else:
                print(m.group(2), m.group(1), m.group(3))
                outfile.write(
                    ("  {\n" +
                     "    \"name\": \""+m.group(2)+"\",\n" +
                     "    \"fullname\": \""+m.group(2)+"\",\n" +
                     "    \"latin\": \""+m.group(3)+"\",\n" +
                     "    \"xc\": "+m.group(1)+"\n" +
                     "  },\n").encode()
                )
    outfile.write(']\n'.encode())
