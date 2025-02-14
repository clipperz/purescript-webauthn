{ name = "purescript-webauthn"
, dependencies =
  [ "aff"
  , "argonaut-core"
  , "arraybuffer-types"
  , "arrays"
  , "codec"
  , "codec-argonaut"
  , "effect"
  , "either"
  , "foreign-object"
  , "maybe"
  , "prelude"
  , "transformers"
  , "tuples"
  , "unsafe-coerce"
  , "web-promise"
  ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
