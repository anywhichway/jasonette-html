# jasonette-html
An HTML/Web renderer for Jasonette

[Jasonette](http://jasonette.com/) supports native iOS and Android mobile apps over HTTP using just JSON. It lacks a web browser renderer. This package provides a renderer.

# Release Notes

Not yet implemented:

1) $include
2) $clear
3) $network
4) $camera - edit
5) Unit tests

Known issues:

1) $toast and $banner do not locate on screen in right place
2) Embedded web rendering does not work well
3) Aesthetics are sub-par
4) Currently works only in Chrome browser



See `examples/comprehensive.html` for a relatively complete example. The `comprehensive.json` file can be loaded into the Andoid/iOS app Jason and seems to work correctly.

# Release History

2017-11-21 v0.0.3 Alpha Ehanced mustache processing to support `this` references. Ajusted flexbox rendering.

2017-11-20 v0.0.2 Alpha Fixed https://github.com/Jasonette/Jasonette/issues/17 for hello.json

2017-11-20 v0.0.1 Alpha
