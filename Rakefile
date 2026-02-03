require 'html-proofer'

desc 'Build the Jekyll site'
task :build do
  puts 'Building Jekyll site...'
  system('bundle exec jekyll build') || exit(1)
  puts 'Build completed successfully!'
end

desc 'Serve the Jekyll site locally'
task :serve do
  puts 'Serving Jekyll site at http://localhost:4000/containers.dev/'
  system('bundle exec jekyll serve')
end

desc 'Clean the Jekyll build'
task :clean do
  puts 'Cleaning _site directory...'
  system('bundle exec jekyll clean')
end

desc 'Test the built site for HTML issues'
task :test_html do
  puts 'Testing HTML...'
  options = {
    assume_extension: true,
    disable_external: true,
    allow_hash_href: true,
    empty_alt_ignore: true
  }
  HTMLProofer.check_directory('./_site', options).run
end

desc 'Build and test the site'
task test: [:build, :test_html]

desc 'Default task: build the site'
task default: :build
