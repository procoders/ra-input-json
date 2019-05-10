# <JSONEditor> and <JSONEView>

JSON edit and view components for [react-admin](https://github.com/marmelab/react-admin) using [JSONInput](https://github.com/AndrewRedican/react-json-editor-ajrm).

## Installing Dependency

Using node package manager:

```bash
$ npm i --save ra-input-json
```

## Usage

```python
import { JSONEditor, JSONEView } from 'ra-input-json';

In List component use JSONEView component.
#Example:
<JSONEView source="your source name" label="your label name"/>

In Form component such as SimpleForm use JSONEditor component.
#Example:
<JSONEView source="your source name" label="your label name"/>
```
## Component Properties

**source** -  Property name of your entity to view/edit. This attribute is *required*.

**viewOnly** - Send true if you would like for content shown not to be editable. *boolean. Optional. Always in JSONEView!*

**confirmGood** - 	Send false if you would like for the checkmark to confirm good syntax to be hidden. boolean. Optional.

**height** - A shorthand property to set a specific height for the entire component. *string. Optional.*

**width** - A shorthand property to set a specific width for the entire component. *string. Optional.*

**modifyErrorText** - A custom function to modify the component's original warning text. This function will receive a single parameter of type string and must equally return a string. *function. Optional.*

**theme** - Specify which built-in [theme](https://github.com/AndrewRedican/react-json-editor-ajrm/wiki/Built-In-Themes) to use. *string. Optional.*

**colors** - Contains the following properties: *object	Optional*

**colors.default** - Hex color code for any symbols, like curly braces, and comma. *string. Optional*

**colors.string** - Hex color code for tokens identified as string values. *string. Optional*

**colors.number** - Hex color code for tokens identified as integeter, double, or float values. *string. Optional*

**colors.colon** - Hex color code for tokens identified as colon. *string. Optional*

**colors.keys** - Hex color code for tokens identified as keys or property names. *string. Optional*

**colors.keys_whiteSpace** - Hex color code for tokens identified as keys wrapped in quotes. *string. Optional*

**colors.primitive** - Hex color code for tokens identified as boolean values and null. *string. Optional*

**colors.error** - Hex color code for tokens marked with an error tag. *string. Optional*

**colors.background** - Hex color code for component's background. *string. Optional*

**colors.background_warning** - Hex color code for warning message displaying at the top in component. *string. Optional*

**style** - Contains the following properties: *object.	Optional*

**style.outerBox** - Property to modify the default style of the outside container div of component. *object. Optional*

**style.container** - Property to modify the default style of the container of component. *object. Optional*

**style.warningBox** - Property to modify the default style of the container div of the warning message. *object. Optional*

**style.errorMessage** - Property to modify the default style of the warning message. *object. Optional*

**style.body** - Property to modify the default style of the container div of row labels and code. *object. Optional*

**style.labelColumn** - Property to modify the default style of the container div of row labels. *object. Optional*

**style.labels** - Property to modify the default style of each row label. *object. Optional*

**style.contentBox** - Property to modify the default style of the container div of the code. *object. Optional*


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)