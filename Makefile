copy-to-test:
	rm -rf ../rn-test/react-web-masked-text
	npm run clean
	npm run build
	cp -R dist ../rn-test/react-web-masked-text