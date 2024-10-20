import React, { forwardRef, useState } from 'react';
import { Box, Grid, RadioGroup, FormControlLabel, Radio, Button, Paper, Typography } from '@mui/material';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Stage, Layer, Circle, Line, Text } from 'react-konva';


const trueFalseQuestion = { id: 1, question: 'She is 29 years old', answer: false };
const multipleChoiceQuestion = {
  id: 2,
  question: 'Choose the correct verb:',
  options: ['To Live', 'To Have food', 'To be live', 'To be living'],
  answer: 'To be living',
};

// Define draggable items
const draggableItems = [
  { id: 1, label: '120' },
  { id: 2, label: '12' },
  { id: 3, label: '150' },
  { id: 4, label: '78' },
];

// Define matching questions and answers
const matchingQuestions = [
  { id: 1, label: 'Question 1', x: 100, y: 100 },
  { id: 2, label: 'Question 2', x: 100, y: 200 },
  { id: 3, label: 'Question 2', x: 100, y: 300 },
  { id: 4, label: 'Question 2', x: 100, y: 400 },
];

const matchingAnswers = [
  { id: 1, label: 'Answer A', x: 400, y: 100 },
  { id: 2, label: 'Answer B', x: 400, y: 200 },
  { id: 3, label: 'Answer C', x: 400, y: 300 },
  { id: 4, label: 'Answer D', x: 400, y: 400 },
];


const DraggableItem = forwardRef<HTMLDivElement, any>(({ item }, ref) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'item',
    item: { id: item.id, label: item.label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  // If ref is a function (callback ref), we invoke it with the drag ref.
  // If it's an object ref, we assign the drag ref.
  const combinedRef = (node: HTMLDivElement | null) => {
    drag(node);
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
    }
  };

  return (
    <Box
      ref={combinedRef} // Use the combined ref here
      sx={{
        padding: '8px',
        border: '1px solid gray',
        backgroundColor: isDragging ? 'lightgreen' : 'white',
        cursor: 'grab',
      }}
    >
      {item.label}
    </Box>
  );
});

// Add a displayName to remove the ESLint warning
DraggableItem.displayName = 'DraggableItem';

const DropZone: React.FC<any> = ({ onDrop, id, droppedItem }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'item',
    drop: (item) => onDrop(item, id),
    canDrop: () => !droppedItem, // Only allow drop if there is no item in this zone
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  // Combining refs for both React DnD and the MUI Box
  const combinedRef = (node: HTMLDivElement | null) => {
    drop(node);
  };

  return (
    <Box
      ref={combinedRef} // Use combinedRef for the drop target
      sx={{
        width: '100%',
        minHeight: '50px',
        border: '2px dashed gray',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isOver && canDrop ? 'lightgreen' : 'transparent',
        flexDirection: 'column',
      }}
    >
      Drop Here
      {droppedItem && (
        <Box key={droppedItem.id} sx={{ margin: '5px', padding: '8px', border: '1px solid blue' }}>
          {droppedItem.label}
        </Box>
      )}
    </Box>
  );
};
const PaperDesign = () => {
  const [lines, setLines] = useState<any>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<any>({});
  const [droppedItemsMap, setDroppedItemsMap] = useState<any>({ 1: null, 2: null, 3: null, 4: null }); // Four drop zones

  const [startNode, setStartNode] = useState<any>(null);

  const handleMouseDown = (node: any, type): any => {
    if (type === 'question') {
      setStartNode(node);
    }
    if (type === 'answer' && startNode) {
      const newLine = {
        start: startNode,
        end: node,
        points: [startNode.x, startNode.y, node.x, node.y],
      };
      setLines((prevLines) => [...prevLines, newLine]);
      setStartNode(null);
    }
  };

  const handleDrop = (item, boxId) => {
    setDroppedItemsMap((prev) => ({
      ...prev,
      [boxId]: item, // Store the item in the specific drop zone
    }));
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswer((prev) => ({ ...prev, [questionId]: answer }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          padding: 4,
          border: '2px dashed #00f',
          width: '100%',
          height: '100%',

        }}
      >
        <Paper variant="elevation" elevation={2}>
          {/* Multiple Choice Question */}
          <Grid container spacing={2} p={2}>
            <Grid item xs={12}>
              <h3>{multipleChoiceQuestion.question}</h3>
              <RadioGroup
                value={selectedAnswer[multipleChoiceQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(multipleChoiceQuestion.id, e.target.value)}
              >
                {multipleChoiceQuestion.options.map((opt, idx) => (
                  <FormControlLabel key={idx} value={opt} control={<Radio />} label={opt} />
                ))}
              </RadioGroup>
            </Grid>

            {/* True/False Question */}
            <Grid item xs={12}>
              <h3>{trueFalseQuestion.question}</h3>
              <RadioGroup
                value={selectedAnswer[trueFalseQuestion.id] || ''}
                onChange={(e) => handleAnswerChange(trueFalseQuestion.id, e.target.value)}
              >
                <FormControlLabel value="true" control={<Radio />} label="True" />
                <FormControlLabel value="false" control={<Radio />} label="False" />
              </RadioGroup>
            </Grid>

            {/* Drag and Drop Section */}
            <Grid item xs={12}>
              <h3>Drag and Drop Items</h3>
              <Grid container spacing={2}>
                {/* Align draggable items and drop zones */}
                {draggableItems.map((item) => (
                  <Grid item xs={3} key={item.id}>
                    <Box mb={4}>
                      <Box p={4} sx={{ background: 'gray', border: '1px solid Black', }}>
                        <Typography variant='h6'>{item?.label}</Typography>

                      </Box>
                      <DropZone
                        onDrop={handleDrop}
                        id={item.id} // Use item.id for drop zone mapping
                        droppedItem={droppedItemsMap[item.id]} // Pass the corresponding dropped item
                      />
                    </Box>
                    <DraggableItem item={item} />

                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Matching by Drawing Lines */}
            <Grid item xs={12}>
              <h3>Match the following by drawing lines between circles</h3>
              <Stage width={800} height={800}>
                <Layer>
                  {matchingQuestions.map((opt, i) => (
                    <React.Fragment key={i}>
                      <Text x={opt.x - 80} y={opt.y - 10} text={opt.label} />
                      <Circle
                        x={opt.x + 10}
                        y={opt.y}
                        radius={20}
                        fill="lightblue"
                        stroke="black"
                        strokeWidth={2}
                        onMouseDown={() => handleMouseDown(opt, 'question')}
                      />

                    </React.Fragment>
                  ))}
                  {matchingAnswers.map((opt, i) => (
                    <React.Fragment key={i}>
                      <Circle
                        x={opt.x + 20}
                        y={opt.y}
                        radius={20}
                        fill="lightgreen"
                        stroke="black"
                        strokeWidth={2}
                        onMouseDown={() => handleMouseDown(opt, 'answer')}
                      />
                      <Text x={opt.x + 70} y={opt.y - 10} text={opt.label} />
                    </React.Fragment>
                  ))}
                  {lines.map((line, i) => (
                    <Line key={i} points={line.points} stroke="black" strokeWidth={2} />
                  ))}
                </Layer>
              </Stage>
            </Grid>
          </Grid>

          <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </Paper>
      </Box>
    </DndProvider>
  );
};

export default PaperDesign;
