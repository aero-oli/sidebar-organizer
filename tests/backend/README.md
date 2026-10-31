Run backend tests with the production YAML parser and WebSocket schema dependency:

```sh
python3 -m pip install -r tests/backend/requirements.txt
PYTHONDONTWRITEBYTECODE=1 python3 -m unittest discover -s tests/backend
```

Command tests import the actual handlers and storage helpers. Home Assistant's
registration/decorator interfaces are stubbed; these tests do not start Home
Assistant or exercise its authentication transport or config-entry lifecycle.
