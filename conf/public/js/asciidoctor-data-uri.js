/* Generated by Opal 0.11.99.dev */
(function (Opal) {
    var TMP_1, self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified,
        $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $send = Opal.send;

    Opal.add_stubs(['$register', '$tree_processor', '$process']);
    return $send($$$($$($nesting, 'Asciidoctor'), 'Extensions'), 'register', [], (TMP_1 = function () {
        var self = TMP_1.$$s || this, TMP_2;

        return $send(self, 'tree_processor', [], (TMP_2 = function () {
            var self = TMP_2.$$s || this, TMP_3;

            return $send(self, 'process', [], (TMP_3 = function (document) {
                var self = TMP_3.$$s || this;

                if (document == null) {
                    document = nil;
                }

                if (document.$attr("data-uri")["$nil?"]()) {
                    return document;
                }

                //document.attributes.$delete("data-uri");
                //document.attribute_overrides.$delete("data-uri");

                var backend = document.$backend();

                if (backend == 'odf' || backend=="revealjs" || backend=="deckjs" || backend == 'docbook5' || backend == 'docbook45' || backend == 'docbook') {
                    return document;
                }

                try {
                    var imageNodes = document.$find_by(Opal.hash2(['context'], {"context": "image"}));

                    imageNodes.forEach(function (node) {

                        var target = node.$attr('target');

                        var imageUri = node.$image_uri(target);
                        var mimetype = "image/png";

                        if (imageUri) {
                            var uriParts = imageUri.split(".");
                            if (uriParts.length >= 2) {
                                var ext = uriParts[uriParts.length - 1];
                                mimetype = ext == "svg" ? "image/svg+xml" : "image/" + ext;
                            }
                        }

                        var params = {
                            path: imageUri,
                            mimetype: mimetype
                        }

                        var dataUri = Ajax.postFile("/read-data-uri", params);

                        node.$attributes()['$[]=']("target", dataUri);

                    });
                } catch (e) {
                    //console.log(e);
                }

                return document;
            }, TMP_3.$$s = self, TMP_3.$$arity = 1, TMP_3))
        }, TMP_2.$$s = self, TMP_2.$$arity = 0, TMP_2))
    }, TMP_1.$$s = self, TMP_1.$$arity = 0, TMP_1))
})(Opal);
