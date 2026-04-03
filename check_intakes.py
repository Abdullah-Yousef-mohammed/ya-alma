import json, urllib.request

for uid, name in [(1, 'Taylors'), (2, 'APU'), (3, 'MMU')]:
    r = urllib.request.urlopen(f'http://localhost:8080/api/universities/{uid}')
    d = json.loads(r.read())
    print(f'ID {uid} {name}: nextIntakeMonths = {d.get("nextIntakeMonths", "NOT SET")}')
