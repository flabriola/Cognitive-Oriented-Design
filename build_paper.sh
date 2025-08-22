#!/bin/bash

# Build script for the Cognition-Oriented Design academic paper
# This script compiles the LaTeX document to PDF

echo "Building Cognition-Oriented Design academic paper..."

# Check if pdflatex is available
if ! command -v pdflatex &> /dev/null; then
    echo "Error: pdflatex is not installed. Please install a LaTeX distribution."
    echo "For macOS, you can install MacTeX: brew install --cask mactex"
    echo "For Ubuntu/Debian: sudo apt-get install texlive-full"
    echo "For Windows, install MiKTeX or TeX Live"
    exit 1
fi

# Create output directory if it doesn't exist
mkdir -p public

# Compile the LaTeX document
echo "Compiling LaTeX document..."
pdflatex -interaction=nonstopmode -output-directory=public academic_paper.tex

# Run twice to resolve references
echo "Resolving references..."
pdflatex -interaction=nonstopmode -output-directory=public academic_paper.tex

# Check if compilation was successful
if [ -f "public/academic_paper.pdf" ]; then
    echo "✅ Paper successfully compiled to public/academic_paper.pdf"
    echo "📄 PDF is ready for download from the website"
else
    echo "❌ Compilation failed. Check the LaTeX errors above."
    exit 1
fi

# Clean up auxiliary files
echo "Cleaning up auxiliary files..."
rm -f public/*.aux public/*.log public/*.out public/*.toc public/*.fdb_latexmk public/*.fls public/*.synctex.gz

echo "Build complete!" 