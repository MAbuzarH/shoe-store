export const product ={
    name :'Product',
    type:'document',
   title:'Product',
   fields:[
   
       {
            name:'title',
            title: 'Title',
            type:'string',
        },
        {
            name:'category',
            title: 'Category',
            type:'string',
        },
        {
            name:'description',
            title: 'Description',
            type:'string',
        },
        {
            name:'orignalPrice',
            title: 'OrignalPrice',
            type:'number',
        }
        ,
        {
            name:'discountedPrice',
            title: 'DiscountedPrice',
            type:'number',
        }
        ,
        
        {
            name:'size',
            title: 'Size',
            type:'array',
            of: [{type:'number'}]
        }
        ,
        {
            name:'mainImage',
            title: 'MainImage',
            type:'image',

        },
        {
          name : "subImages",
          title : "SubImages",
          type : 'array',
          of: [{type:'image'}]
        }
   
   ]
}