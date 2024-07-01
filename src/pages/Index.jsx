import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const data = [
  { id: 1, name: "Row 1" },
  { id: 2, name: "Row 2" },
  { id: 3, name: "Row 3" },
];

function Index() {
  const [selectedValues, setSelectedValues] = useState({});

  const handleRadioChange = (rowId, value) => {
    setSelectedValues((prev) => ({
      ...prev,
      [rowId]: value,
    }));
  };

  return (
    <main className="flex flex-1 flex-col items-center justify-center p-4">
      <h1 className="text-3xl text-center mb-4">Radio Button Table</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Row</TableHead>
            <TableHead>Option 1</TableHead>
            <TableHead>Option 2</TableHead>
            <TableHead>Option 3</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>
                <RadioGroup
                  value={selectedValues[row.id] || ""}
                  onValueChange={(value) => handleRadioChange(row.id, value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option1" id={`option1-${row.id}`} />
                    <Label htmlFor={`option1-${row.id}`}>Option 1</Label>
                  </div>
                </RadioGroup>
              </TableCell>
              <TableCell>
                <RadioGroup
                  value={selectedValues[row.id] || ""}
                  onValueChange={(value) => handleRadioChange(row.id, value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option2" id={`option2-${row.id}`} />
                    <Label htmlFor={`option2-${row.id}`}>Option 2</Label>
                  </div>
                </RadioGroup>
              </TableCell>
              <TableCell>
                <RadioGroup
                  value={selectedValues[row.id] || ""}
                  onValueChange={(value) => handleRadioChange(row.id, value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option3" id={`option3-${row.id}`} />
                    <Label htmlFor={`option3-${row.id}`}>Option 3</Label>
                  </div>
                </RadioGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}

export default Index;