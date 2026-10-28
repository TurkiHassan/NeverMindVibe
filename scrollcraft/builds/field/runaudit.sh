#!/bin/bash
# usage: runaudit.sh url W H [reduced]
cd /Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/scrollcraft
node builds/field/audit.mjs "$@" 2>&1 | python3 -c "
import sys,json
t=sys.stdin.read()
try:
  d=json.loads(t)
except Exception: print('ERR',t[:400]); sys.exit()
print(d['url'].split('4618')[1],d['W'],d['H'],'red' if d['red'] else '','tot',d['total'],'| console',d['console'],'| hscroll',d['hscroll'],'| tap',d['tap'],'| clip',d['clip'],'| contrast',d['contrast'],'| noRing',d['noRing'],'| offscreen',d['offscreenFocus'],'| tabs',d['tabCount'])"
