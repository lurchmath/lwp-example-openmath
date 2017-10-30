
# OpenMath Content Dictionary Editor

## Introduction

This is an example application built on the
[Lurch Web Platform](https://github.com/lurchmath/lurch),
to show developers how to use that platform.  It assumes you've already
seen and understood the simpler examples,
[one](https://github.com/lurchmath/lwp-example-simple),
[two](https://github.com/lurchmath/lwp-example-complex), and
[three](https://github.com/lurchmath/lwp-example-math).

For those unfamiliar with OpenMath, see its specification document
[here](http://www.openmath.org/standard/om20-2004-06-30/).  For those
unfamiliar with the structure of a Content Dictionary, see the online
[explanation and archive](https://www.openmath.org/cd/) of OpenMath
Content Dictionaries.

Read the (heavily commented) code here:

 * [App code](lwp-example-openmath.litcoffee) for this specific example
 * [HTML code](index.html) that loads the platform and application

There is also a very simple [build process](gulpfile.litcoffee).

## How to use the app

[Visit the app here.](https://lurchmath.github.io/lwp-example-openmath)

Try these things:

To insert any kind of comment about the dictionary structure:

 * At any point, ordinary word processing content (paragraphs of formatted
   text) can be used to add comments.
 * Only content inside bubbles is treated as meaningful, that is, as part of
   the Content Dictionary specification itself.

To insert meaningful structure:

 * Click the `{ }` button on the toolbar to insert a structure.
 * Click the tag of the new bubble to see a menu of what you can do with the
   newly created structure.
 * Use the "Read ... Documentation" button to see the official specification
   for the type of structure under the mouse.
 * Use the "Change tag to..." button to change which kind of structure it
   is.

XML format:

 * OpenMath Content Dictionaries are stored in XML format.
 * Consequently, when using this demo app, you're writing a document whose
   meaning is a specific XML hierarchy.
 * You can see the XML of any bubble at any time with the "View XML
   Representation" button on its tag menu.
 * You can see the XML for the entire document at any time with the XML
   button on the toolbar.
 * If your document is not properly structured according to the XML rules
   for Content Dictionaries, you will see a warning before your XML is
   shown.

How to build meaning:

 * To structure an OpenMath Content Dictionary correctly, try starting a new
   document and adding content in this order, one after the other.
    * Content Dictionary Name (containing any valid identifier)
    * Content Dictionary URL (containing the URL where it would be
      published)
    * Content Dictionary Base (containing the base URI for all symbols
      defined in the document)
    * Content Dictionary Review Date (YYYY-MM-DD format)
    * Content Dictionary Date (YYYY-MM-DD format)
    * Content Dictionary Status (such as "private" or "official")
    * Content Dictionary Version (such as 1)
    * Content Dictionary Revision (such as 3, which with version 1 would
      mean something akin to 1.3)
 * There could then follow definitions of various symbols in the CD, but
   that's enough of an example for you to see how to insert data.
 * As mentioned above, comments between structures are useful but not
   required.

## Bugs/enhancements

About this demo app specifically:

 * Create an importer that reads in OM CDs and creates documents from them
   that use Groups.  This would then truly be an OM CD Editor.
 * The validation routine is one routine with four independent checks.
   That's perfect for breaking into four separate routines and enqueueing
   all into the background as separate tasks, a nice test of that model.

About the [XML groups
module](https://github.com/lurchmath/lurch/blob/master/source/auxiliary/xml-groups.litcoffee)
that this app replies upon, from the main Lurch repository:

 * On double-click of a close grouper, give more detailed feedback about
   failed structural rules.
 * Make an option for whether to show tags even when the cursor is not in
   the bubble.  If so, make the open decoration of every bubble
   "#{tagName}:".
 * Each tag's data should be able to specify a set of Group attributes that
   should be copied into the XML output as element attributes.  Then
   clients can create their own UI for editing such attributes, and just
   store them in the Groups themselves, content with the fact that the
   `xml-groups` module will carry that data over into the XML output.
