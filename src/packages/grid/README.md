## @anctech/button

### Usage

```
<AnctechButton label='Button' onClick={() => {}} />
```

### Props

###### label (mandetory)

Type: string
Description: label shows the text on button label

###### onClick (mandetory)

Type: function
Description: onClick takes the function passed in and actions when user click the button

###### size (optional)

Type: 'sm' | 'md' | 'lg'
Description: size shows the button size default value is medium ('md').

###### outline (optional)

Type: boolean
Description: outline property makes display as full colour or hollow style. Default value is false

###### color (optional)

Type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
Description: Accordiong to Bootstrap the color styles button color, hover color, and font color. Default value is 'primary'

###### disabled (optional)

Type: boolean
Description: Make button disable when it is true. Default value is false
