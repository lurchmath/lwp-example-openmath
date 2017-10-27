var indexOf=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};setAppName("OM-CD-Writer"),addHelpMenuSourceCodeLink("lwp-example-openmath/blob/master/lwp-example-openmath.litcoffee"),window.helpAboutText='<p>See the fully documented <a target="top" href="https://github.com/lurchmath/lwp-example-openmath/blob/master/lwp-example-openmath.litcoffee" >source code for this demo app</a>.</p>',window.groupTypes=[{name:"tag",text:"Content Dictionary Tag",tooltip:"Tag the selection",imageHTML:'<font color="#999999">{}</font>',openImageHTML:'<font color="#999999">{</font>',closeImageHTML:'<font color="#999999">}</font>',contentsChanged:window.XMLGroupChanged,deleted:window.XMLGroupDeleted,tagContents:function(e){return window.getTagExternalName(e.get("tagName"))},tagMenuItems:function(e){return window.XMLMenuItems(e)},contextMenuItems:function(e){return window.XMLMenuItems(e)}}],window.setTagData({CD:{externalName:"Content Dictionary",topLevel:!0,defaultChild:"Description",includeText:"CDComment",allowedChildren:{CDName:[1,1],CDURL:[0,1],CDBase:[0,1],CDReviewDate:[0,1],CDDate:[1,1],CDStatus:[1,1],CDUses:[0,1],CDVersion:[1,1],CDRevision:[1,1],CDDefinition:[0,9999999999]}},Description:{documentation:'<p>The text occurring in the Description element is used to give a description of the enclosing element, which could be a symbol or the entire Content Dictionary.  The content of this element can be any XML text.</p> <p>Within the whole Content Dictionary, this element is optional, but should come before any other elements of the Content Dictionary.  There can be at most one description for a Content Dictionary.</p> <p>Within a Content Dictionary Definition, this element is required, and follows the Name and optional Role.  There must be exactly one description for a Content Dictionary Definition.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD","CDDefinition","Name","Role"],belongsAfter:[null,"Name","Role"],unique:!0},CDComment:{externalName:"Content Dictionary Comment",documentation:"<p>This tag will not actually be used in authoring, but will be automatically wrapped around any top-level text in the document when XML is generated.</p>"},CDName:{externalName:"Content Dictionary Name",documentation:'<p>The name of the Content Dictionary.  This will be the "cd" field of all symbols from this Content Dictionary.  For example, standard addition comes from the Content Dictionary "arith1".  It must comply to the rules in Section 2.3 of <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a>.</p> <p>This element is required in a Content Dictionary, and must either be the first element or immediately after the optional description.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["Description",null],unique:!0,contentCheck:function(e){return OM.variable(e.contentAsText().trim())instanceof OMNode?[]:["Content Dictionary Names must be valid identifiers. The content of this element is not."]}},CDURL:{externalName:"Content Dictionary URL",documentation:'<p>The text occurring in the CDURL element should be a valid URL where the source file for the Content Dictionary encoding can be found (if it exists). The filename should conform to <a href="http://www.iso.org/iso/en/CatalogueDetailPage.CatalogueDetail?CSNUMBER=17505">ISO 9660</a>.</p> <p>This element is optional, but if present, there must be only one and it must immediately follow the Content Dictionary Name element.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["CDName"],unique:!0,contentCheck:function(e){return/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/i.test(e.contentAsText().trim())?[]:["Content Dictionary URL elements must contain valid URLs.  This one does not."]}},CDBase:{externalName:"Content Dictionary Base",documentation:'<p>A Content Dictionary Base, when combined with the Content Dictionary Name, forms a unique identifier for the Content Dictionary.  It may or may not refer to an actual location from which it can be retrieved.</p> <p>This element is optional, but if present, there must be only one and it must immediately follow the Content Dictionary Name and optional URL.</p> <p>For example, standard addition comes from the content dictionary "arith1" with base "http://www.openmath.org/cd".  It is also the case that you can find that Content Dictionary file online at <a href="http://www.openmath.org/cd/arith1.xhtml">http://www.openmath.org/cd/arith1.xhtml</a>, but it is not required that the base be a URL.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["Name","CDURL"],unique:!0},CDUses:{externalName:"Content Dictionaries Used",documentation:'<p>The content of this element should be a series of Content Dictionary Name elements, each naming a Content Dictionary used in the Example and Mathematical Properties of the current Content Dictionary.  This element is optional and deprecated since the information can easily be extracted automatically.</p> <p>If present, there can be only one of these elements, and it must immediately follow the Content Dictionary Status.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["CDStatus"],unique:!0,contentCheck:function(e){var t,n,o,a;return n=function(e){return OM.variable(e)instanceof OMNode},a=e.contentAsText().trim().split(/\s+/),(t=function(){var e,t,i;for(i=[],e=0,t=a.length;e<t;e++)o=a[e],n(o)&&i.push(o);return i}()).length>0?["Content Dictionary Uses must be lists of valid identifiers.  The following words are not valid identifiers:  "+t.join(", ")]:[]}},CDReviewDate:{externalName:"Content Dictionary Review Date",documentation:'<p>A review date is a date until which the content dictionary is guaranteed to remain unchanged.  Dates should be written in the ISO-compliant format YYYY-MM-DD, e.g. 1966-02-03.</p> <p>This element is optional.  If present, there can be only one, and it must follow the Content Dictionary Name and optional URL and Base URL.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["Name","CDURL","CDBase"],unique:!0,contentCheck:function(e){var t,n,o;return(n=/^([0-9]{4})-([0-9]{2})-([0-9]{2})$/.exec(e.contentAsText().trim()))?(o=parseInt(n[2]),t=parseInt(n[3]),o<1||o>12?["This element must contain a valid date in the form YYYY-MM-DD.  The month "+o+" is invalid."]:t<1||t>31?["This element must contain a valid date in the form YYYY-MM-DD.  The date "+t+" is invalid."]:[]):["This element must contain a valid date of the form YYYY-MM-DD."]}},CDStatus:{externalName:"Content Dictionary Status",documentation:'<p>The status of the Content Dictionary, which must be one of the following four words.</p> <ul> <li><b>official:</b> approved by the OpenMath Society according to the procedure outlined in Section 4.5 of <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></li> <li><b>experimental:</b> under development and thus liable to change</li> <li><b>private:</b> used by a private group of OpenMath users</li> <li><b>obsolete:</b> an obsolete Content Dictionary kept only for archival purposes</li> </ul> <p>This element is required in a Content Dictionary, and there must be only one, and it must follow the Content Dictionary Date.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["CDDate"],unique:!0,contentCheck:function(e){var t,n;return n=["official","experimental","private","obsolete"],t=e.contentAsText().trim(),indexOf.call(n,t)>=0?[]:["A Content Dictionary Status must be one of the following choices: "+n.join(", ")]}},CDDate:{externalName:"Content Dictionary Date",documentation:'<p>A revision date, the date of the last change to the Content Dictionary. Dates should be written in the ISO-compliant format YYYY-MM-DD, e.g. 1966-02-03.</p> <p>This element is required in any Content Dictionary. There must be exactly one, and it must immediately follow the Content Dictionary Name and optional URL, Base, and Review Date.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["Name","CDURL","CDBase","CDReviewDate"],unique:!0,contentCheck:function(e){return window.getTagData("CDReviewDate","contentCheck")(e)}},CDVersion:{externalName:"Content Dictionary Version",documentation:'<p>A version number must consist of two parts, a major version and a revision, both of which should be non-negative integers.  In Content Dictionaries that do not have status experimental, the version number should be a positive integer.</p> <p>This field stores the major version.  Use a Content Dictionary Revision to store the other half of the version number.</p> <p>This element is required in any Content Dictionary. There must be exactly one, and it must immediately follow the Content Dictionary Status and optional Uses element.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["CDStatus","CDUses"],unique:!0,contentCheck:function(e){return/[0-9]+/.test(e.contentAsText().trim())?[]:["A Content Dictionary Version must be a nonnegative integer."]}},CDRevision:{externalName:"Content Dictionary Revision",documentation:'<p>A version number must consist of two parts, a major version and a revision, both of which should be non-negative integers.  In Content Dictionaries that do not have status experimental, the version number should be a positive integer.</p> <p>This field stores the revision.  Use a Content Dictionary Version to store the other half of the version number.</p> <p>This element is required in any Content Dictionary. There must be exactly one, and it must immediately follow the Content Dictionary Version.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],belongsAfter:["CDVersion"],unique:!0,contentCheck:function(e){return/[0-9]+/.test(e.contentAsText().trim())?[]:["A Content Dictionary Revision must be a nonnegative integer."]}},CDDefinition:{externalName:"Symbol Definition",defaultChild:"Description",documentation:'<p>This element contains the definition of an individual symbol in the Content Dictionary.  It should contain all the following.</p> <ul> <li>Name (required)</li> <li>Description (required)</li> <li>Role (optional)</li> <li>Zero or more Mathematical Properties</li> <li>Zero or more Examples</li> </ul> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CD"],includeText:"MathematicalProperty",allowedChildren:{Name:[1,1],Role:[0,1],Description:[1,1],Example:[0,9999999999],MathematicalProperty:[0,9999999999]}},Name:{externalName:"Symbol Name",documentation:'<p>The name of a symbol.  For example, standard addition comes from the Content Dictionary "arith1" and has the symbol name "plus".  Names must comply to the rules in Section 2.3 of <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a>.</p> <p>A Content Dictionary Definition requires a Name element, and it must be the first element.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CDDefinition"],belongsAfter:[null],unique:!0,contentCheck:function(e){return OM.variable(e.contentAsText().trim())instanceof OMNode?[]:["Symbol Names must be valid identifiers. The content of this element is not."]}},Role:{externalName:"Symbol Role",documentation:'<p>The role of a symbol, which indicates how the symbol can be used in OpenMath expressions.  It must be one of the following.</p> <ul> <li>binder</li> <li>attribution</li> <li>semantic-attribution</li> <li>error</li> <li>application</li> <li>constant</li> </ul> <p>A Content Dictionary Definition does not require a Role element, but if one appears, it must immediately follow the Name element.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CDDefinition"],belongsAfter:["Name"],unique:!0,contentCheck:function(e){var t,n;return n=["binder","attribution","semantic-attribution","error","application","constant"],t=e.contentAsText().trim(),indexOf.call(n,t)>=0?[]:["A Symbol Role must be one of the following choices: "+n.join(", ")]}},Example:{documentation:'<p>An example should show how the symbol is used, to illustrate the symbol to the reader of the Content Dictionary.  There is no set format, other than that you may intersperse text and OpenMath Object as you see fit, and must not use any other content inside an Example.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CDDefinition"],allowedChildren:{OMOBJ:[0,9999999999]}},OMOBJ:{externalName:"OpenMath Object",documentation:'<p>An OpenMath Object, expressed in the XML encoding defined in <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a>.</p> <p>OpenMath Objects can be placed inside Examples to show how the symbol that\'s being defined might be used.  They can also be placed inside Mathematical Properties, to make them formal.</p> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CDDefinition","MathematicalProperty"],rawXML:!0,alterXML:function(e,t){return"CDDefinition"===window.getGroupTag(t.parent)&&(e="<FMP>"+e+"</FMP>"),e}},MathematicalProperty:{externalName:"Mathematical Property",defaultChild:"OMOBJ",documentation:'<p>A Mathematical Property can come in one of two forms.</p> <ul> <li><b>Formal:</b> In this form, the content of the Mathematical Property should be just a single OpenMath Object.  Thus OpenMath is the language used to formalize Mathematical Properties in Content Dictionaries.</li> <li><b>Commented:</b> In this form, the content of the Mathematical Property can be any text, and can express a Mathematical Property in whatever informal language or description seems appropriate.</li> </ul> <p>Source: <a href="http://www.openmath.org/standard/om20-2004-06-30/omstd20.pdf">the OpenMath Standard version 2.0</a></p>',belongsIn:["CDDefinition"],alterXML:function(e,t){return e.indexOf("<OMOBJ>")>-1?e.replace(/MathematicalProperty>/g,"FMP>"):e.replace(/MathematicalProperty>/g,"CMP>")},allowedChildren:{OMOBJ:[0,1]}}});
//# sourceMappingURL=lwp-example-openmath.js.map
