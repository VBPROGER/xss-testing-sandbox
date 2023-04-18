#!/usr/bin/env python3
import flask # type: ignore
name = __name__
app = flask.Flask(name, template_folder = 'levels')
levels = [
    '1.html',
    '2.html',
]
level_0 = levels[0]

@app.route('/')
def index():
    return flask.redirect(level_0)

@app.route('/1')
def level_one():
    return flask.render_template(level_0)

def main(host: str = 'localhost', port: int = 8080, debug: bool = False, *args, **kwargs):
    app.run(host = host, port = port, debug = debug, *args, **kwargs)

if __name__ == '__main__':
    main()