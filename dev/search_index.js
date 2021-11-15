var documenterSearchIndex = {"docs":
[{"location":"guide/#Getting-Started","page":"Guide","title":"Getting Started","text":"","category":"section"},{"location":"guide/","page":"Guide","title":"Guide","text":"To build a schema according the struct you want store there are some guidelines.","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"The names of the structs an the Entities have to be the same e.g.","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"struct Address\n    street::String\n    town::String,\n    addr_id::DbId\nend","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"will be in the schema","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"define\n    street sub attribute, value string;\n    town sub attribute, value string;\n\n    Address sub entity,\n        owns street,\n        owns town;","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"If you seen above there is one thing you have to add into the struct besides the fields you want store. You must add an id field of type DbId to your struct. This is needed to identify if the struct is stored (the iid will be stored inside the DbId) or get the corresponding data structure from TypeDBClient.jl.","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"The DbId can be build for a new object with DbId(). This marks the struct as new and it will be stored if you write this to the database.","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"The types String, Number, Date, DateTime and Boolean will be stored directly as attributes. If you use another struct inside a struct the corresponding object will be stored as a relation. This relation has to be modelled inside the schema. An example struct and schema will looks like the following:","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"struct Address\n    street::String\n    town::String,\n    addr_id::DbId\nend","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"mutable struct Employee\n    name::String\n    address_rel::Address\n    empl_id::DbId\nend","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"define\n    street sub attribute, value string;\n    town sub attribute, value string;\n    name sub attribute, value string;\n\n    Address sub entity,\n        owns street,\n        owns town.\n        play address_rel:address;\n\n\n    Employee sub entity,\n        owns name,\n        plays address_rel:employee;\n\n    adress_rel sub relation,\n        relates address,\n        relates employee;","category":"page"},{"location":"guide/","page":"Guide","title":"Guide","text":"Please note that the roles relates address has to be written with the same naming as the structs. In this case address => Address. The naming isn't case sensitiv so you can follow the naming conventions in Julia that the names of structs begins with a uppercase Letter.","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = TypeDBORM","category":"page"},{"location":"#TypeDBORM","page":"Home","title":"TypeDBORM","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for TypeDBORM.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [TypeDBORM]","category":"page"}]
}
