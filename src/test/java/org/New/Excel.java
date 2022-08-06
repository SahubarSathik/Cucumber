package org.New;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;


public class Excel {

	public static void main(String[] args) throws IOException {
		
		
		String f = "C:\\Users\\Sathik\\eclipse-workspace\\login\\test_data.xlsx";
		FileInputStream stream = new FileInputStream(f);
		Workbook book = new XSSFWorkbook(stream);
		Sheet sheet2 = book.getSheet("Regression");
		Row row2 = sheet2.getRow(1);
		Cell cell = row2.getCell(1);
		cell.setCellValue("mathi");
		FileOutputStream fo = new FileOutputStream(f);
		book.write(fo);
		book.close();
		fo.close();

	}
}
