## @anctech/grid

### Usage

```
<AnctechRow vAlign='start' hAlign={{xs: 'start', md: 'center', lg: 'end'}} colsPerRow={{xs: 3, md: 4, lg: 5}}>
  <AnctechCols colSize={3} selfAlign='start' offset={{xs: 3, lg: 6}}>
    {other contents}
  </AnctechCols>
</AnctechRow>
```

### Props

###### colsPerRow (optional)

Type: object
Description: colsPerRow sets many column displaying on each row for different screen size.

###### hAlign (optional)

Type: object
Description: hAlign sets horizontal alignment for different screen size.

###### vAlign (optional)

Type: 'start' | 'center' | 'end'
Description: vAlign sets vertical alginment.

###### colSize (optional)

Type: number | object
Description: colSize sets size for each column for different screen size.

###### selfAlign (optional)

Type: 'start' | 'center' | 'end'
Description: selfAlign sets vertical alignment for signle column.

###### offset (optional)

Type: object
Description: offset sets offest for a column.
