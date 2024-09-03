import * as path from "path";
import * as Excel from 'exceljs'


const filePath = path.resolve(__dirname,'Book1.xlsx')

type Attendence = 'A'|'P';
// const transformTeam = (value: string): Attendence => {
//     return value === 'Absent' ? 'A' : 'P';
//   };
type Student = {
    id:number
    name:string
    attendence:string
    email:string
}

const getCellValue = (row:Excel.Row,cellIndex:number)=>{
    const cell = row.getCell(cellIndex)
    console.log(cell.value);
    
    return cell.value? cell.value.toString():'';
}

const main = async () => {
    const workbook = new Excel.Workbook();
    const content = await workbook.xlsx.readFile(filePath)

    const worksheet = content.worksheets[1];
    const rowStartIndex = 2;
    const numberOfRows = worksheet.rowCount - 1;

    const rows = worksheet.getRows(rowStartIndex,numberOfRows)??[];
    const students = rows.map((row):Student=>
       { return {
            id:+getCellValue(row,1),
            name:getCellValue(row,2),
            attendence:getCellValue(row,3),
             email:getCellValue(row,4)
        }})
        console.log(students);
        
}
console.log("Hi");

main().then()