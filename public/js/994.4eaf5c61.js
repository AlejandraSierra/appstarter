"use strict";(self["webpackChunkrecetario_front"]=self["webpackChunkrecetario_front"]||[]).push([[994],{2994:function(e,l,a){a.r(l),a.d(l,{default:function(){return p}});a(4114);var t=a(6768),n=a(5130),i=a(4232);const o={key:1,class:"text-grey text-caption align-self-center"},r={key:1,class:"text-grey text-caption align-self-center"};function s(e,l,a,s,d,u){const c=(0,t.g2)("v-col"),m=(0,t.g2)("v-row"),p=(0,t.g2)("v-text-field"),k=(0,t.g2)("v-textarea"),b=(0,t.g2)("v-chip"),f=(0,t.g2)("v-select"),F=(0,t.g2)("v-btn"),g=(0,t.g2)("v-form"),h=(0,t.g2)("v-table"),v=(0,t.g2)("v-list-item"),_=(0,t.g2)("v-list"),V=(0,t.g2)("v-container");return(0,t.uX)(),(0,t.Wv)(V,null,{default:(0,t.k6)((()=>[(0,t.bF)(m,{class:"mb-8"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[21]||(l[21]=[(0,t.Lk)("h4",null,"Nueva Receta",-1)]))),_:1})])),_:1}),(0,t.bF)(g,{modelValue:e.recipeForm,"onUpdate:modelValue":l[20]||(l[20]=l=>e.recipeForm=l),ref:"recipeForm",onSubmit:(0,n.D$)(u.onSubmit,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(m,{class:"mb-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[22]||(l[22]=[(0,t.Lk)("h6",null,"Datos generales",-1)]))),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12",sm:"6"},{default:(0,t.k6)((()=>[l[23]||(l[23]=(0,t.Lk)("p",{class:"overline"},"Nombre",-1)),(0,t.bF)(p,{modelValue:e.recipe.name,"onUpdate:modelValue":l[0]||(l[0]=l=>e.recipe.name=l),placeholder:"Ingresa el nombre de la receta",variant:"underlined",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12",sm:"6"},{default:(0,t.k6)((()=>[l[24]||(l[24]=(0,t.Lk)("p",{class:"overline"},"Descripción corta",-1)),(0,t.bF)(p,{modelValue:e.recipe.shortDescription,"onUpdate:modelValue":l[1]||(l[1]=l=>e.recipe.shortDescription=l),placeholder:"Ingresa la descripción corta de la receta 0/200",variant:"underlined","persistent-counter":"",counter:"200",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[l[25]||(l[25]=(0,t.Lk)("p",{class:"overline"},"Descripción",-1)),(0,t.bF)(k,{modelValue:e.recipe.description,"onUpdate:modelValue":l[2]||(l[2]=l=>e.recipe.description=l),placeholder:"Ingresa la descripción de la receta",variant:"underlined","auto-grow":"",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12",sm:"6"},{default:(0,t.k6)((()=>[l[26]||(l[26]=(0,t.Lk)("p",{class:"overline"},"Categoría",-1)),(0,t.bF)(f,{modelValue:e.recipe.categories,"onUpdate:modelValue":l[3]||(l[3]=l=>e.recipe.categories=l),items:e.helpers.categories,placeholder:"Selecciona una o varias categorías",chips:"",multiple:"",variant:"underlined","closable-chips":"",color:"primary"},{selection:(0,t.k6)((({item:l,index:a})=>[a<5?((0,t.uX)(),(0,t.Wv)(b,{key:0},{default:(0,t.k6)((()=>[(0,t.Lk)("span",null,(0,i.v_)(l.title),1)])),_:2},1024)):(0,t.Q3)("",!0),5===a?((0,t.uX)(),(0,t.CE)("span",o," (+"+(0,i.v_)(e.value.length-5)+" otros) ",1)):(0,t.Q3)("",!0)])),_:1},8,["modelValue","items"])])),_:1}),(0,t.bF)(c,{cols:"12",sm:"6"},{default:(0,t.k6)((()=>[l[27]||(l[27]=(0,t.Lk)("p",{class:"overline"},"Dificultad",-1)),(0,t.bF)(f,{modelValue:e.recipe.difficult,"onUpdate:modelValue":l[4]||(l[4]=l=>e.recipe.difficult=l),items:e.helpers.difficult,placeholder:"Selecciona la dificultad",variant:"underlined",color:"primary"},null,8,["modelValue","items"])])),_:1}),(0,t.bF)(c,{cols:"12",sm:"6"},{default:(0,t.k6)((()=>[l[28]||(l[28]=(0,t.Lk)("p",{class:"overline"},"Tiempo de elaboración (minutos)",-1)),(0,t.bF)(p,{modelValue:e.recipe.time,"onUpdate:modelValue":l[5]||(l[5]=l=>e.recipe.time=l),placeholder:"Ingresa el tiempo de elaboración en minutos",variant:"underlined",color:"primary",type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(m,{class:"my-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[29]||(l[29]=[(0,t.Lk)("h6",null,"Ingredientes",-1)]))),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12",md:"2"},{default:(0,t.k6)((()=>[l[30]||(l[30]=(0,t.Lk)("p",{class:"overline"},"Porciones",-1)),(0,t.bF)(p,{modelValue:e.recipe.servings,"onUpdate:modelValue":l[6]||(l[6]=l=>e.recipe.servings=l),variant:"underlined",color:"primary",type:"number",min:"0",max:"50"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(g,{modelValue:e.ingredientForm,"onUpdate:modelValue":l[11]||(l[11]=l=>e.ingredientForm=l),onSubmit:(0,n.D$)(u.addIngredient,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12",md:"2"},{default:(0,t.k6)((()=>[l[31]||(l[31]=(0,t.Lk)("p",{class:"overline"},"Cantidad",-1)),(0,t.bF)(p,{modelValue:e.ingredient.amount,"onUpdate:modelValue":l[7]||(l[7]=l=>e.ingredient.amount=l),variant:"underlined",color:"primary",type:"number",min:"0"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12",md:"2"},{default:(0,t.k6)((()=>[l[32]||(l[32]=(0,t.Lk)("p",{class:"overline"},"Unidades",-1)),(0,t.bF)(f,{modelValue:e.ingredient.units,"onUpdate:modelValue":l[8]||(l[8]=l=>e.ingredient.units=l),items:e.helpers.ingredientsUnits,placeholder:"Unidad",variant:"underlined",color:"primary"},null,8,["modelValue","items"])])),_:1}),(0,t.bF)(c,{cols:"12",md:"5"},{default:(0,t.k6)((()=>[l[33]||(l[33]=(0,t.Lk)("p",{class:"overline"},"Ingrediente",-1)),(0,t.bF)(p,{modelValue:e.ingredient.name,"onUpdate:modelValue":l[9]||(l[9]=l=>e.ingredient.name=l),placeholder:"Nombre del ingrediente",variant:"underlined",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12",md:"3"},{default:(0,t.k6)((()=>[l[34]||(l[34]=(0,t.Lk)("p",{class:"overline"},"Alérgenos",-1)),(0,t.bF)(f,{modelValue:e.ingredient.allergens,"onUpdate:modelValue":l[10]||(l[10]=l=>e.ingredient.allergens=l),items:e.helpers.allergens,placeholder:"Indica alérgenos",chips:"",multiple:"",variant:"underlined","closable-chips":"",color:"primary"},{selection:(0,t.k6)((({item:l,index:a})=>[a<2?((0,t.uX)(),(0,t.Wv)(b,{key:0},{default:(0,t.k6)((()=>[(0,t.Lk)("span",null,(0,i.v_)(l.title),1)])),_:2},1024)):(0,t.Q3)("",!0),2===a?((0,t.uX)(),(0,t.CE)("span",r," (+"+(0,i.v_)(e.value.length-2)+" otros) ",1)):(0,t.Q3)("",!0)])),_:1},8,["modelValue","items"])])),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(F,{class:"ma-0",type:"submit"},{default:(0,t.k6)((()=>l[35]||(l[35]=[(0,t.eW)(" Añadir ingrediente + ")]))),_:1})])),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.Lk)("p",null,"Ingredientes añadidos para "+(0,i.v_)(e.recipe.servings)+" porciones",1)])),_:1})])),_:1})])),_:1},8,["modelValue","onSubmit"]),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(h,{density:"comfortable",theme:"primary"},{default:(0,t.k6)((()=>[l[37]||(l[37]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",{class:"text-left"}," Cantidad "),(0,t.Lk)("th",{class:"text-left"}," Unidades "),(0,t.Lk)("th",{class:"text-left"}," Ingrediente "),(0,t.Lk)("th",{class:"text-left"}," Alérgenos "),(0,t.Lk)("th",{class:"text-left"}," Opciones ")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.recipe.ingredients,(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e.name},[(0,t.Lk)("td",null,(0,i.v_)(e.amount),1),(0,t.Lk)("td",null,(0,i.v_)(e.units),1),(0,t.Lk)("td",null,(0,i.v_)(e.name),1),(0,t.Lk)("td",null,(0,i.v_)(e.allergens),1),l[36]||(l[36]=(0,t.Lk)("td",null,"Editar | Eliminar",-1))])))),128))])])),_:1})])),_:1})])),_:1}),(0,t.bF)(m,{class:"my-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[38]||(l[38]=[(0,t.Lk)("h6",null,"Utensilios",-1)]))),_:1})])),_:1}),(0,t.bF)(m,{class:"justify-space-between"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"6"},{default:(0,t.k6)((()=>l[39]||(l[39]=[(0,t.Lk)("p",{class:"overline"},"utensilios",-1)]))),_:1}),u.allSelected?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(c,{key:0,cols:"3"},{default:(0,t.k6)((()=>[(0,t.bF)(p,{ref:"searchField",modelValue:e.search,"onUpdate:modelValue":l[12]||(l[12]=l=>e.search=l),label:"Buscar utensilios","hide-details":"","single-line":"",variant:"underlined",dense:""},null,8,["modelValue"])])),_:1}))])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(_,{class:"d-flex"},{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(u.cookware,(l=>((0,t.uX)(),(0,t.CE)(t.FK,null,[e.selected.includes(l)?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.Wv)(v,{class:"px-2",key:l.text,disabled:e.loading,density:"compact","base-color":"white",rounded:"50px",variant:"plain",onClick:a=>e.selected.push(l)},{default:(0,t.k6)((()=>[(0,t.bF)(b,{disabled:e.loading,variant:"outlined",color:"success"},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(l.text),1)])),_:2},1032,["disabled"])])),_:2},1032,["disabled","onClick"]))],64)))),256))])),_:1})])),_:1}),(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[40]||(l[40]=[(0,t.Lk)("p",{class:"overline"},"utensilios seleccionados",-1)]))),_:1}),((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(u.selections,((l,a)=>((0,t.uX)(),(0,t.Wv)(c,{key:l.text,class:"py-1 pe-0",cols:"auto"},{default:(0,t.k6)((()=>[(0,t.bF)(b,{disabled:e.loading,closable:"","onClick:close":l=>e.selected.splice(a,1)},{default:(0,t.k6)((()=>[(0,t.eW)((0,i.v_)(l.text),1)])),_:2},1032,["disabled","onClick:close"])])),_:2},1024)))),128))])),_:1}),(0,t.bF)(m,{class:"my-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[41]||(l[41]=[(0,t.Lk)("h6",null,"Instrucciones",-1)]))),_:1})])),_:1}),(0,t.bF)(g,{modelValue:e.instructionsForm,"onUpdate:modelValue":l[15]||(l[15]=l=>e.instructionsForm=l),onSubmit:(0,n.D$)(u.addInstruction,["prevent"])},{default:(0,t.k6)((()=>[(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12",sm:"2"},{default:(0,t.k6)((()=>[l[42]||(l[42]=(0,t.Lk)("p",{class:"overline"},"Paso",-1)),(0,t.bF)(p,{modelValue:e.instruction.step,"onUpdate:modelValue":l[13]||(l[13]=l=>e.instruction.step=l),placeholder:"#Ingresa el tiempo de elaboración en minutos",variant:"underlined",color:"primary",type:"number",min:"0",step:"10"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"12",sm:"10"},{default:(0,t.k6)((()=>[l[43]||(l[43]=(0,t.Lk)("p",{class:"overline"},"Instrucción",-1)),(0,t.bF)(p,{modelValue:e.instruction.description,"onUpdate:modelValue":l[14]||(l[14]=l=>e.instruction.description=l),placeholder:"Ingresa la instrucción",variant:"underlined",color:"primary",type:"number"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(F,{class:"ma-0",type:"submit"},{default:(0,t.k6)((()=>l[44]||(l[44]=[(0,t.eW)(" Añadir instrucción + ")]))),_:1})])),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(h,{density:"comfortable",theme:"primary"},{default:(0,t.k6)((()=>[l[46]||(l[46]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th",{class:"text-left"}," Instrucción "),(0,t.Lk)("th",{class:"text-left"}," Opciones ")])],-1)),(0,t.Lk)("tbody",null,[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(e.recipe.instructions,(e=>((0,t.uX)(),(0,t.CE)("tr",{key:e.step},[(0,t.Lk)("td",null,(0,i.v_)(e.step)+". "+(0,i.v_)(e.description),1),l[45]||(l[45]=(0,t.Lk)("td",null,"Editar | Eliminar",-1))])))),128))])])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","onSubmit"]),(0,t.bF)(m,{class:"my-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[47]||(l[47]=[(0,t.Lk)("h6",null,"Acompañamientos",-1)]))),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[l[48]||(l[48]=(0,t.Lk)("p",{class:"overline"},"Acompañamientos",-1)),(0,t.bF)(k,{modelValue:e.recipe.sides,"onUpdate:modelValue":l[16]||(l[16]=l=>e.recipe.sides=l),placeholder:"Ingresa las diferentes opciones de acompañamientos que puede tener esta receta",variant:"underlined","auto-grow":"",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(m,{class:"my-6"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>l[49]||(l[49]=[(0,t.Lk)("h6",null,"Multimedia",-1)]))),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"6"},{default:(0,t.k6)((()=>[l[50]||(l[50]=(0,t.Lk)("p",{class:"overline"},"Imagen en miniatura",-1)),(0,t.bF)(p,{modelValue:e.recipe.smallImage,"onUpdate:modelValue":l[17]||(l[17]=l=>e.recipe.smallImage=l),placeholder:"Arrastra y suelta una imagen",variant:"underlined",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"6"},{default:(0,t.k6)((()=>[l[51]||(l[51]=(0,t.Lk)("p",{class:"overline"},"Imagen principal",-1)),(0,t.bF)(p,{modelValue:e.recipe.mainImage,"onUpdate:modelValue":l[18]||(l[18]=l=>e.recipe.mainImage=l),placeholder:"Arrastra y suelta una imagen",variant:"underlined",color:"primary"},null,8,["modelValue"])])),_:1}),(0,t.bF)(c,{cols:"6"},{default:(0,t.k6)((()=>[l[52]||(l[52]=(0,t.Lk)("p",{class:"overline"},"video tutorial",-1)),(0,t.bF)(p,{modelValue:e.recipe.videoLink,"onUpdate:modelValue":l[19]||(l[19]=l=>e.recipe.videoLink=l),placeholder:"Ingresa la URL del video tutorial",variant:"underlined",color:"primary"},null,8,["modelValue"])])),_:1})])),_:1}),(0,t.bF)(m,null,{default:(0,t.k6)((()=>[(0,t.bF)(c,{cols:"12"},{default:(0,t.k6)((()=>[(0,t.bF)(F,{onClick:u.clearForm},{default:(0,t.k6)((()=>l[53]||(l[53]=[(0,t.eW)(" Cancelar ")]))),_:1},8,["onClick"]),(0,t.bF)(F,{class:"me-4",color:"primary",onClick:u.validateRecipeForm},{default:(0,t.k6)((()=>l[54]||(l[54]=[(0,t.eW)(" Crear Receta ")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["modelValue","onSubmit"])])),_:1})}var d=a(4373),u={data:()=>({recipeForm:!1,ingredientForm:!1,instructionsForm:!1,email:null,password:null,loading:!1,recipe:{name:"",shortDescription:"",description:"",categories:[],difficult:[],time:"",servings:"",ingredients:[{amount:100,units:"Gramos",name:"Arroz",allergens:["Ninguno"]}],instructions:[{step:1,description:"Instrucciones paso 1"}],sides:"",smallImage:"",mainImage:"",videoLink:""},ingredient:{amount:"",units:"",name:"",allergens:[]},instruction:{step:0,description:""},helpers:{categories:["Desayunos","Ensaladas","Platos fuertes","Guarniciones","Pastas","Sopas","Salsas","Bebidas","Pan","Postres","FastFood"],difficult:["Dificultad baja","Dificultad media","Dificultad alta"],ingredientsUnits:["Gramos","Kilos","Mililitros","Litros","Cucharaditas","Cucharadas"],allergens:["Gluten","Huevos","Cacahuetes","Soja","Lácteos","Ninguno"],cookware:[{text:"Cuchillo"},{text:"Sarten"},{text:"Olla profunda"},{text:"Tabla"},{text:"Batidora"}]},search:"",selected:[],recipes:{}}),computed:{allSelected(){return this.selected.length===this.helpers.cookware.length},cookware(){const e=this.search.toLowerCase();return e?this.helpers.cookware.filter((l=>{const a=l.text.toLowerCase();return a.indexOf(e)>-1})):this.helpers.cookware},selections(){const e=[];for(const l of this.selected)e.push(l);return e}},watch:{selected(){this.search=""}},methods:{async loadData(){try{const e=await d.A.get("http://localhost:8080/recipes",{headers:{"Content-Type":"application/json"},withCredentials:!1});this.recipes=e.data,console.log(this.recipes)}catch(e){this.error="Error fetching recipes",console.error(e)}},onSubmit(){alert("Envío del formulario"),this.recipe&&this.axios.post("http://localhost:8080/recipes",this.recipe).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).finally((function(){this.loading=!1}))},required(e){return!!e||"Field is required"},addIngredient(){let e=this.ingredient;alert(e)},addInstruction(){let e=this.instruction;alert(e)},clearForm(){this.$refs.recipeForm.reset()},validateRecipeForm(){alert("Envío del formulario")}},mounted(){this.loadData()}},c=a(1241);const m=(0,c.A)(u,[["render",s]]);var p=m}}]);
//# sourceMappingURL=994.4eaf5c61.js.map