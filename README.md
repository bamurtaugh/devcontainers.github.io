# Development Containers Website

This repo holds the website for the [Development Containers Specification](https://github.com/devcontainers/spec).

You may view the site at [containers.dev](https://containers.dev).

## Building

If you'd like to build and preview the site yourself, we make it as smooth as possible through a dev container in this repo!

### Dev container

You may build GitHub Pages sites with [Jekyll](https://jekyllrb.com/), which is a Ruby gem. You could manually install these tools on your machine, or you can easily get started with the setup you already need through a dev container!

You may review this repo's dev container in the [`.devcontainer`](https://github.com/devcontainers/containers.dev/tree/gh-pages/.devcontainer) folder.

It is from this [Jekyll Dev Container Template](https://github.com/devcontainers/templates/tree/main/src/jekyll).

### Steps to build and run

* Clone or open this repo in the dev container-supporting editor of your choosing.
     * You may review supporting tools and services [here](https://containers.dev/supporting).
* Reopen this repo in the dev container, so that the container builds and you may develop inside it using the included tools. 
* Once the dev container finishes building, execute the following command in your dev container to start the site: `bundle exec jekyll serve`
* Check out the site! http://localhost:4000/containers.dev/

## Testing

### Local Development Testing

After making changes to the site, you should test them locally before submitting a pull request:

1. **Start the development server** (if not already running):
   ```bash
   bundle exec jekyll serve
   ```

2. **Preview your changes** at http://localhost:4000/containers.dev/
   - The site will automatically rebuild when you save changes to most files
   - Refresh your browser to see updates

3. **Check for build errors** in the terminal output:
   - Look for any warnings or errors from Jekyll
   - Common issues include invalid YAML front matter, broken Liquid syntax, or missing files

### Build Verification

To verify that your changes will build successfully on GitHub Pages:

1. **Clean build** the site:
   ```bash
   bundle exec jekyll clean
   bundle exec jekyll build
   ```

2. **Check the output**:
   - Successful builds will complete without errors
   - Built files will be in the `_site` directory
   - Review the terminal output for any warnings

### Content Validation

When adding or modifying content:

1. **Verify links**: Check that all internal and external links work correctly
   - Click through navigation menus
   - Test links in your new or modified content
   - Ensure relative links use the correct base path

2. **Test responsive design**: Preview the site at different screen sizes
   - Desktop (1920x1080)
   - Tablet (768x1024)
   - Mobile (375x667)

3. **Validate Markdown**: Ensure proper formatting
   - Headers follow proper hierarchy (h1 → h2 → h3)
   - Code blocks have language identifiers
   - Lists and tables are properly formatted

### Common Issues and Troubleshooting

**Jekyll won't start or build fails:**
- Run `bundle install` to ensure all dependencies are installed
- Check that you're using the correct Ruby version (specified in the Gemfile)
- Look for syntax errors in YAML front matter or Liquid templates

**Changes not appearing:**
- Make sure the file you changed isn't in the `exclude` list in `_config.yml`
- Some files (like `_config.yml`) require restarting the Jekyll server
- Clear your browser cache if CSS/JS changes aren't showing

**Port 4000 already in use:**
- Stop any existing Jekyll processes: `pkill -f jekyll`
- Or use a different port: `bundle exec jekyll serve --port 4001`

**Missing data files:**
- The site requires `devcontainer-index.json` and `devcontainer-control-manifest.json` in the `_data` directory
- Run the fetch script: `.devcontainer/fetch-index.sh` (requires `oras` to be installed)

### Pre-Submission Checklist

Before submitting your pull request:

- [ ] Site builds without errors locally
- [ ] All new/modified pages display correctly in the browser
- [ ] Links have been tested and work as expected
- [ ] Content is clear, well-formatted, and free of typos
- [ ] No sensitive information or secrets are included
- [ ] Changes are focused and minimal for the intended purpose

## Feedback and contributing

If you'd like to provide feedback on or contribute to the dev containers website, please feel free to open an issue or PR in this repo.

For issues on and contributions to the dev container specification itself, please visit the [Dev Containers Spec repo](https://github.com/devcontainers/spec).

## License

License for this repository: https://github.com/devcontainers/containers.dev/blob/gh-pages/LICENSE.
