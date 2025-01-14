import React from "react";
import {
    Box,
    IconButton,
    FormControl,
    InputAdornment,
    OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useCustomTheme } from "../../../providers/CustomThemeProvider";

export default function SearchBar() {
    const { isDark } = useCustomTheme();
    const [searchParams, setSearchParams] = useSearchParams();
    const handleChange = ({ target }) => setSearchParams({ q: target.value });

    return (
        <>
            <Box display="inline-flex">
                <FormControl variant="standard">
                    <OutlinedInput
                        sx={{ backgroundColor: isDark ? "#333333" : "#e3f2fd" }}
                        placeholder="Search"
                        size="small"
                        value={searchParams.get("q") ?? ""}
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton edge="end">
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </Box>
        </>
    );
}
