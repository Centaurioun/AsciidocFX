/* Generated by Opal 0.6.3 */
var templateMap = {
    revealjs: {},
    deckjs: {}
};


function convertDeck(node) {
    var obj = {};
    obj.node = node;
    obj.name = node.$node_name ? node.$node_name() : "";

    // Cache disabled icin comment yap
    //var templateMap = {
    //    revealjs: {},
    //    deckjs: {}
    //};

    var map = templateMap["deckjs"];

    if (!map)
        return "";

    if (!map[obj.name]) {
        var template = Ajax.getFile("/afx/jade/?p=deckjs/"+obj.name+".jade");
        var fn = jade.compile(template, {pretty: true});
        map[obj.name] = fn;
    }

    var result = map[obj.name](obj);

    return result;
}

/* Generated by Opal 0.11.99.dev */
(function (Opal) {
    var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative,
        $breaker = Opal.breaker, $slice = Opal.slice, $module = Opal.module, $klass = Opal.klass, $hash2 = Opal.hash2;

    Opal.add_stubs(['$register_for', '$init_backend_traits']);
    return (function ($base, $parent_nesting) {
        function $Asciidoctor() {
        };
        var self = $Asciidoctor = $module($base, 'Asciidoctor', $Asciidoctor);

        var def = self.prototype, $nesting = [self].concat($parent_nesting);

        (function ($base, $super, $parent_nesting) {
            function $DeckjsConverter() {
            };
            var self = $DeckjsConverter = $klass($base, $super, 'DeckjsConverter', $DeckjsConverter);

            var def = self.prototype, $nesting = [self].concat($parent_nesting), TMP_DeckjsConverter_initialize_1,
                TMP_DeckjsConverter_convert_2;


            self.$register_for("deckjs");

            Opal.def(self, '$initialize', TMP_DeckjsConverter_initialize_1 = function $$initialize(backend, opts) {
                var self = this;


                if (opts == null) {
                    opts = $hash2([], {});
                }
                ;
                self.backend = backend;
                return self.$init_backend_traits($hash2(["basebackend", "filetype", "outfilesuffix", "supports_templates"], {
                    "basebackend": "deckjs",
                    "filetype": "html",
                    "outfilesuffix": ".html",
                    "supports_templates": true
                }));
            }, TMP_DeckjsConverter_initialize_1.$$arity = -2);
            return (Opal.def(self, '$convert', TMP_DeckjsConverter_convert_2 = function $$convert(node, transform, opts) {
                var self = this;


                if (transform == null) {
                    transform = nil;
                }
                ;

                if (opts == null) {
                    opts = nil;
                }
                ;
                return convertDeck(node);
            }, TMP_DeckjsConverter_convert_2.$$arity = -2), nil) && 'convert';
        })($$($nesting, 'Converter'), $$$($$($nesting, 'Converter'), 'Base'), $nesting)
    })($nesting[0], $nesting)
})(Opal);