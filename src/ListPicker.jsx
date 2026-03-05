export default function ListPicker({values}){
    const index = Math.floor(Math.random() * values.length);
    const randEle = values[index];
    return (
    <div>
        <p>The list of values:{values}</p>
        <p>Random Element: {randEle}</p>
    </div>
    )
}