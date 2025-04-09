import React, { useState } from 'react';

//Use State


const GeneratedContent = ({ content, contentTypes, isLoading }) => {
  // State for the active tab
  const [activeTab, setActiveTab] = useState(contentTypes[0] || 'product_description');

  const [isEditingSEOTitle, setIsEditingSEOTitle] = useState(false);
  const [isEditingSEODescription, setIsEditingSEODescription] = useState(false);
  const [editedSEOTitle, setEditedSEOTitle] = useState("");
  const [editedSEODescription, setEditedSEODescription] = useState("");

  const [isEditingEmailSubject, setIsEditingEmailSubject] = useState(false);
  const [editedEmailSubject, setEditedEmailSubject] = useState("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState("");


  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");
  
  // Handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  
  // Check if we have content for a specific type
  const hasContent = (type) => {
    return content && content[type];
  };
  
  // Render content for a specific type
  const renderContent = (type) => {
    if (!content || !content[type]) {
      return null;
    }
    switch (type) {
      case 'product_description':
        return (
          <div className="description-content">
            <h3>Product Description</h3>
            <div className="content-box">
              <p>{content.product_description.detailed_description}</p>
              {/* Check if editing*/}
              {isEditingDescription ? (
                <textarea
                  value={editedDescription}
                  //Take input
                  onChange={(e) => setEditedDescription(e.target.value)}
                  style={{ width: '100%' }}
                  />
              ) : null}
            </div>

            {/* Since in editing, handle the modification:*/}
            {isEditingDescription ? (
              <div>
                <button className="save-btn" onClick={() => //Handle save logic
                {content.product_description.detailed_description = editedDescription;
                setIsEditingDescription(false)
                setEditedDescription(content.product_description.detailed_description);
                }}>Save</button>
                <button
                      className="cancel-btn"
                      onClick={() => {
                        setIsEditingDescription(false);
                        setEditedDescription(content.product_description.detailed_description);
                      }}
                    >
                      Cancel
                    </button>
              </div>
            ) : (
              <button className="edit-btn" onClick={() => {
                setIsEditingDescription(true)
                setEditedDescription(content.product_description.detailed_description)
              }}>Edit</button>
            )}
          </div>
        );
        
      case 'seo':
        return (
          <div className="seo-content">
            <h3>SEO Content</h3>
            
            <div className="content-section">
              <h4>Title Tag</h4>



              <div className="content-box">
                <p>{content.seo.title}</p>
                {/* Check if editing*/}
              {isEditingSEOTitle ? (
                <input
                  value={editedSEOTitle}
                  //Take input
                  onChange={(e) => setEditedSEOTitle(e.target.value)}
                  style={{ width: '100%' }}
                  />
              ) : null}

              </div>
            {/* Since in editing, handle the modification:*/}
            {isEditingSEOTitle ? (
              <div>
                <button className="seo-save-btn" onClick={() => //Handle save logic
                {content.seo.title = editedSEOTitle;
                setIsEditingSEOTitle(false)
                setEditedSEOTitle(content.seo.title);
                }}>Save</button>
                <button
                      className="seo-cancel-btn"
                      onClick={() => {
                        setIsEditingSEOTitle(false);
                        setEditedSEOTitle(content.seo.title);
                      }}
                    >
                      Cancel
                    </button>
              </div>
            ) : (
              <div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.seo.title)}>
                Copy Title
                </button>
                <button className="seo-edit-btn" onClick={() => {
                setIsEditingSEOTitle(true);
                setEditedSEOTitle(content.seo.title);
              }}>Edit</button>
              </div>
            )}  

              <p className="character-count">
                {content.seo.title.length} characters
                {content.seo.title.length > 60 ? 
                  content.seo.title.length > 70 ? 
                    " (Too long!)" : 
                    " (Near limit)" : 
                  ""}
              </p>
              
            </div>
            
            <div className="content-section">
              <h4>Meta Description</h4>

              <div className="content-box">
                <p>{content.seo.description}</p>
                {/* Check if editing*/}
              {isEditingSEODescription ? (
                <textarea
                  value={editedSEODescription}
                  //Take input
                  onChange={(e) => setEditedSEODescription(e.target.value)}
                  style={{ width: '100%' }}
                  />
              ) : null}
              </div>

              {/* Since in editing, handle the modification:*/}
            {isEditingSEODescription ? (
              <div>
                <button className="seo-save-btn" onClick={() => //Handle save logic
                {content.seo.description = editedSEODescription;
                setIsEditingSEODescription(false)
                setEditedSEODescription(content.seo.detailed_description);
                }}>Save</button>
                <button
                      className="seo-cancel-btn"
                      onClick={() => {
                        setIsEditingSEODescription(false);
                        setEditedSEODescription(content.seo.description);
                      }}
                    >
                      Cancel
                    </button>
              </div>
            ) : (
              <div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.seo.description)}>
                Copy Description
                </button>
                <button className="seo-edit-btn" onClick={() => {
                setIsEditingSEODescription(true);
                setEditedSEODescription(content.seo.description);
              }}>Edit</button>
              </div>
            )}


              <p className="character-count">
                {content.seo.description.length} characters
                {content.seo.description.length > 150 ? 
                  content.seo.description.length > 160 ? // LIMIT !!!! 
                    " (Too long!)" : 
                    " (Near limit)" : 
                  ""}
              </p>
            </div>
          </div>
        );
        
      case 'marketing_email':
        return (
          <div className="email-content">
            <h3>Marketing Email</h3>
            
            <div className="content-section">
              <h4>Subject Line</h4>
              <div className="content-box">
                <p>{content.marketing_email.subject}</p>
                {isEditingEmailSubject ? (
                <input
                  value={editedEmailSubject}
                  //Take input
                  onChange={(e) => setEditedEmailSubject(e.target.value)}
                  style={{ width: '100%' }}
                  />
              ) : null}
              </div>
              {/*Button to copy subject line, unneeded?
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.marketing_email.subject)}>
                Copy Subject
              </button>

              */}

              {/* Since in editing, handle the modification:*/}
              {isEditingEmailSubject ? (
              <div>
                <button className="marketing-save-btn" onClick={() => //Handle save logic
                {content.marketing_email.subject = editedEmailSubject;
                setIsEditingEmailSubject(false)
                setEditedEmailSubject(content.marketing_email.subject);
                }}>Save</button>
                <button
                      className="marketing-cancel-btn"
                      onClick={() => {
                        setIsEditingEmailSubject(false);
                        setEditedEmailSubject(content.marketing_email.subject);
                      }}
                    >
                      Cancel
                    </button>
              </div>
            ) : (
              <div>
                <button className="marketing-edit-btn" onClick={() => {
                setIsEditingEmailSubject(true);
                setEditedEmailSubject(content.marketing_email.subject);
              }}>Edit</button>
              </div>
            )}  
            </div>
            
            <div className="content-section">
              <h4>Email Body</h4>
              <div className="content-box email-body">
                {content.marketing_email.body.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                {isEditingEmail ? (
                <textarea
                  value={editedEmail}
                  //Take input
                  onChange={(e) => setEditedEmail(e.target.value)}
                  style={{ width: '100%' }}
                  rows={11}
                  />
              ) : null}
              </div>

              {/*Body, unneeded?
              <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.marketing_email.body)}>
                Copy Body
              </button>
              */}

              {isEditingEmail ? (
              <div>
                <button className="marketing-body-save-btn" onClick={() => //Handle save logic
                {content.marketing_email.body = editedEmail;
                setIsEditingEmail(false)
                setEditedEmail(content.marketing_email.body);
                }}>Save</button>
                <button
                      className="marketing-body-cancel-btn"
                      onClick={() => {
                        setIsEditingEmail(false);
                        setEditedEmail(content.marketing_email.body);
                      }}
                    >
                      Cancel
                    </button>
              </div>
            ) : (
              <div>
                <button className="marketing-body-edit-btn" onClick={() => {
                setIsEditingEmail(true);
                setEditedEmail(content.marketing_email.body);
              }}>Edit</button>
              </div>
            )}
    
            </div>
            
            <button className="copy-btn copy-all" onClick={() => navigator.clipboard.writeText(
              `Subject: ${content.marketing_email.subject}\n\n${content.marketing_email.body}`
            )}>
              Copy Complete Email
            </button>
          </div>
        );
        
      case 'social_media':
        return (
          <div className="social-media-content">
            <h3>Social Media Content</h3>
            
            {content.social_media.instagram && (
              <div className="content-section">
                <h4>Instagram</h4>
                <div className="content-box">
                  <p>{content.social_media.instagram}</p>
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.social_media.instagram)}>
                  Copy Instagram
                </button>
              </div>
            )}
            
            {content.social_media.facebook && (
              <div className="content-section">
                <h4>Facebook</h4>
                <div className="content-box">
                  <p>{content.social_media.facebook}</p>
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.social_media.facebook)}>
                  Copy Facebook
                </button>
              </div>
            )}
            
            {content.social_media.twitter && (
              <div className="content-section">
                <h4>Twitter</h4>
                <div className="content-box">
                  <p>{content.social_media.twitter}</p>
                </div>
                <p className="character-count">
                  {content.social_media.twitter.length} characters
                  {content.social_media.twitter.length > 260 ? 
                    content.social_media.twitter.length > 280 ? 
                      " (Too long!)" : 
                      " (Near limit)" : 
                    ""}
                </p>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.social_media.twitter)}>
                  Copy Twitter
                </button>
              </div>
            )}
            
            {content.social_media.linkedin && (
              <div className="content-section">
                <h4>LinkedIn</h4>
                <div className="content-box">
                  <p>{content.social_media.linkedin}</p>
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.social_media.linkedin)}>
                  Copy LinkedIn
                </button>
              </div>
            )}
          </div>
        );
        
      case 'missing_fields':
        return (
          <div className="missing-fields-content">
            <h3>Generated Missing Fields</h3>
            
            {Object.entries(content.missing_fields).map(([field, value]) => {
              if (Array.isArray(value)) {
                return (
                  <div key={field} className="content-section">
                    <h4>{field.charAt(0).toUpperCase() + field.slice(1)}</h4>
                    <div className="content-box">
                      <ul>
                        {value.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              } else if (typeof value === 'object') {
                return (
                  <div key={field} className="content-section">
                    <h4>{field.charAt(0).toUpperCase() + field.slice(1)}</h4>
                    <div className="content-box">
                      <pre>{JSON.stringify(value, null, 2)}</pre>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={field} className="content-section">
                    <h4>{field.charAt(0).toUpperCase() + field.slice(1)}</h4>
                    <div className="content-box">
                      <p>{value}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        );
        
      case 'product_image':
        return (
          <div className="product-image-content">
            <h3>Generated Product Image</h3>
            
            <div className="content-section">
              <h4>Image</h4>
              <div className="content-box image-container">
                <a 
                href={content.product_image.image_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="download-link"
              >
                {/* Image */}
                <img 
                  src={content.product_image.image_url} 
                  alt="Generated product" 
                  className="generated-image" 
                />
              </a>
              </div>
              {/* Copy prompt section 
              <div className="content-section">
                <h4>Prompt Used</h4>
                
                <div className="content-box">
                  <p>{content.product_image.prompt}</p>
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(content.product_image.prompt)}>
                  Copy Prompt
                </button>
              </div>*/}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className="generated-content-container">
      <h2>Generated Content</h2>
      
      {isLoading ? (
        <div className="loading-message">
          <p>Generating content...</p>
          <div className="loading-spinner"></div>
        </div>
      ) : content ? (
        <div className="content-tabs-container">
          {/* Tabs for different content types 
          
          <div className="content-tabs">
            {contentTypes.map(type => (
              <button
                key={type}
                className={`tab-button ${activeTab === type ? 'active' : ''} ${hasContent(type) ? 'has-content' : 'no-content'}`}
                onClick={() => handleTabClick(type)}
              >
                {type === 'product_description' && 'Product Description'}
                {type === 'seo' && 'SEO Content'}
                {type === 'marketing_email' && 'Marketing Email'}
                {type === 'social_media' && 'Social Media'}
                {type === 'missing_fields' && 'Missing Fields'}
              </button>
            ))}
          </div>
          */}
          <div className="content-panel">
            {/* Render all Content we chose to generate */}
            {contentTypes.map(type => hasContent(type) ? renderContent(type) : (
              <div className="no-content-message">
                <p>No content generated for this type yet. Click "Generate Content" to create content.</p>
              </div>
            ))}







          </div>
        </div>
      ) : (
        <div className="no-content-message">
          <p>Select a product or create a custom one, then click "Generate Content" to get started.</p>
        </div>
      )}
    </div>
  );
};

export default GeneratedContent;