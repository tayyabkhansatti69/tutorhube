
import {

    Button,
    Grid,

    Stack,

} from "@mui/material";
import React from "react";

import { CustomModal } from "@/src/components";

import { RHFUploadSingleFileWithPreview } from "@/src/components/rhf/rhf-upload";

function VideoAddModel(props: any) {
    const { open, setOpen } = props


    return (
        <div>

            <CustomModal
                isOpen={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                headerLabel="Add video"
                closeButtonProps={{ onClick: () => setOpen(false) }}
                rootSx={{
                    maxWidth: 600,
                }}
            >

                <Grid container >
                    <Grid xs={12} sm={12} p={1} item>
                        <RHFUploadSingleFileWithPreview label="Select Card" fullWidth name="intro_video_url" />
                    </Grid>

                    <Stack direction="row" justifyContent="end" spacing={2}>
                        <Button
                            sx={{ borderRadius: 30, minWidth: 100 }}
                            variant="contained"
                            size="small"
                            onClick={() => setOpen(false)}
                        >
                            cancel
                        </Button>

                        <Button
                            variant="outlined"
                            type="button"
                            onClick={() => setOpen(false)}
                            size="small"
                            sx={{
                                borderRadius: 30,
                                minWidth: 100,
                                color: "primary.main",
                            }}
                        >
                            Save
                        </Button>
                    </Stack>

                </Grid>
            </CustomModal>
        </div>
    );
}

export default VideoAddModel;
